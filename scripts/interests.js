(function () {
      function setupRevealIO() {
        const reveal = (entries, obs) => {
          entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('show-on-scroll');
            entry.target.classList.remove('hidden-on-load');
            obs.unobserve(entry.target);
          });
        };
        const io = new IntersectionObserver(reveal, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
        document.querySelectorAll('.hidden-on-load, .fade-zoom').forEach(el => io.observe(el));
      }

      function setupSeparatorIO() {
        const sepIO = new IntersectionObserver((entries) => {
          entries.forEach(e => {
            if (!e.isIntersecting) return;
            e.target.classList.add('animate');
            e.target.classList.remove('hidden-separator');
            sepIO.unobserve(e.target);
          });
        }, { threshold: 0 });
        document.querySelectorAll('.section-separator').forEach(el => sepIO.observe(el));
      }

      // Jeśli about_story w translations jest plain-textem, zrób <p>…</p>.
      // Jeśli już podajesz tam HTML z <p>, to nic tu nie zmieni.
      function formatParagraphsIn(key) {
        const el = document.querySelector(`[data-i18n="${key}"]`);
        if (!el) return;
        if (el.querySelector('p')) return; // już sformatowane w translations
        const raw = el.innerHTML || el.textContent || '';
        const cleaned = raw.replace(/&nbsp;/g, ' ').replace(/\r/g, '').trim();
        if (!cleaned) return;
        const parts = cleaned.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean);
        if (parts.length === 0) return;
        el.innerHTML = parts.map(p => `<p>${p.replace(/\n+/g, '<br>')}</p>`).join('');
      }

      function runAll() {
        setupRevealIO();
        setupSeparatorIO();
        formatParagraphsIn('about_story');
        formatParagraphsIn('about_interests_text');
      }

      window.addEventListener('DOMContentLoaded', runAll);
      document.addEventListener('languageChanged', runAll);
      window.addEventListener('error', () => {
        document.querySelectorAll('.hidden-on-load, .hidden-separator')
          .forEach(el => el.classList.remove('hidden-on-load', 'hidden-separator'));
      });
      setTimeout(() => {
        document.querySelectorAll('.hidden-on-load').forEach(el => el.classList.remove('hidden-on-load'));
      }, 1200);
    })();