/**
 * Widget Instagram (wersja bez embed.js) — akceptuje linki z /p/… i /reel/…
 * także gdy w URL jest nazwa profilu (np. /kawjorek/p/...).
 *
 * Wpisz swoje linki w POSTS (poniżej wklejone Twoje).
 */
const POSTS = [
  "https://www.instagram.com/kawjorek/p/C4DSBMqidZF/",
  "https://www.instagram.com/kawjorek/reel/CwKJrBgNAX0/",
  "https://www.instagram.com/kawjorek/p/DBlAReDi_j6/",
  "https://www.instagram.com/kawjorek/p/DBMP6gMir0e/",
  "https://www.instagram.com/kawjorek/p/C_LRPxrCNWY/",
  "https://www.instagram.com/kawjorek/reel/C9xMVsaiVaP/",
  "https://www.instagram.com/kawjorek/p/C9jqUKsCJZ6/",
  "https://www.instagram.com/kawjorek/p/C8cUXr9CHZH/",
  "https://www.instagram.com/kawjorek/p/C8XOuyUi0T-/",
  "https://www.instagram.com/kawjorek/p/C8Up5yBiEKE/",
  "https://www.instagram.com/kawjorek/p/C8SLXFViIjj/",
  "https://www.instagram.com/kawjorek/p/C6gyL4JCdVR/"
];

(function renderIGEmbeds(){
  const grid = document.getElementById('igw-grid');
  if (!grid) return;

  // 1) Wyciągnij typ (p|reel) i shortcode z dowolnego URL zawierającego /p/ lub /reel/
  function extract(u){
    try {
      const x = new URL(u);
      // pozwól na oba formaty: /p/... lub /<user>/p/...
      // szukamy ostatniego wystąpienia /p/ albo /reel/ i bierzemy następny segment
      const m = x.pathname.match(/\/(p|reel)\/([^\/?]+)\/?/i);
      if (!m) return null;
      const kind = m[1].toLowerCase();     // "p" albo "reel"
      const code = m[2];                   // shortcode
      return { kind, code };
    } catch { return null; }
  }

  // 2) Z listy linków budujemy ustandaryzowane URL-e /embed/
  const embeds = Array.from(new Set(
    (POSTS || [])
      .map(extract)
      .filter(Boolean)
      .map(({kind, code}) => `https://www.instagram.com/${kind}/${code}/embed/`)
  ));

  if (!embeds.length) {
    grid.innerHTML = '<div class="igw-note">Brak poprawnych linków IG. Wklej adresy zawierające <code>/p/</code> lub <code>/reel/</code> (konto i posty muszą być publiczne).</div>';
    return;
  }

  // 3) Renderuj iframy
  embeds.forEach(src => {
    const card = document.createElement('div');
    card.className = 'igw-card';

    const iframe = document.createElement('iframe');
    iframe.className = 'igw-embed';
    iframe.src = src;
    iframe.setAttribute('allowtransparency', 'true');
    iframe.setAttribute('scrolling', 'no');
    iframe.setAttribute('title', 'Instagram post');
    iframe.width = '400';
    iframe.height = '480';

    iframe.addEventListener('error', () => {
      const note = document.createElement('div');
      note.className = 'igw-note';
      note.innerHTML = 'Nie mogę wczytać osadzenia z Instagrama. Sprawdź blokery (AdBlock/Privacy) oraz CSP dla <code>instagram.com</code> i <code>*.cdninstagram.com</code>.';
      card.innerHTML = '';
      card.appendChild(note);
    });

    card.appendChild(iframe);
    grid.appendChild(card);
  });
})();
