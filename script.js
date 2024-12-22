const musicControl = document.getElementById('musicControl');
const backgroundMusic = document.getElementById('backgroundMusic');

let isPlaying = true;

musicControl.addEventListener('click', () => {
  if (isPlaying) {
    backgroundMusic.pause();
    musicControl.textContent = '🔇';
  } else {
    backgroundMusic.play();
    musicControl.textContent = '🔊';
  }
  isPlaying = !isPlaying;
});
