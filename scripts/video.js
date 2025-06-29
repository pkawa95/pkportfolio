// ================================
// 🎬 Odtwarzacz wideo fullscreen toggle
// ================================

function toggleFullscreen(btn) {
  const container = btn.closest('.video-player-container');
  const video = container.querySelector('video');

  if (!document.fullscreenElement) {
    if (container.requestFullscreen) {
      container.requestFullscreen();
    } else if (container.webkitRequestFullscreen) { /* Safari */
      container.webkitRequestFullscreen();
    } else if (container.msRequestFullscreen) { /* IE11 */
      container.msRequestFullscreen();
    }
    btn.textContent = "Exit Fullscreen";
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
    btn.textContent = "Fullscreen";
  }
}

// ================================
// 🎬 Opcjonalnie: Autoodtwarzanie przy wejściu w fullscreen
// ================================
document.addEventListener('fullscreenchange', () => {
  const video = document.querySelector('.video-player-container video');
  if (document.fullscreenElement) {
    video.play();
  } else {
    video.pause();
  }
});

// ================================
// ✅ DOMContentLoaded init (jeśli chcesz dodać inne skrypty w przyszłości)
// ================================
document.addEventListener("DOMContentLoaded", () => {
  console.log("Video player ready");
});
