const music = document.getElementById('bg-music');
const pauseBtn = document.getElementById('pause-btn');

pauseBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    pauseBtn.textContent = '⏸️ Pausar música';
  } else {
    music.pause();
    pauseBtn.textContent = '▶️ Reanudar música';
  }
});
