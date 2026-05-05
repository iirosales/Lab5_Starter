// expose.js
const jsConfetti = new JSConfetti();


window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('img[alt="No image selected"]');
  const audioElement = document.querySelector('.hidden');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('img[alt="Volume level 2"]');
  const playButton = document.querySelector('button');

  hornSelect.addEventListener('change', (event) => {
    const selectedHorn = event.target.value;
    hornImage.src = `assets/images/${selectedHorn}.svg`;
    audioElement.src = `assets/audio/${selectedHorn}.mp3`;
  });

  volumeSlider.addEventListener('input', (event) => {
    const vol = parseInt(event.target.value);
    audioElement.volume = vol / 100;

    if (vol === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (vol < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (vol < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  playButton.addEventListener('click', () => {
    audioElement.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}