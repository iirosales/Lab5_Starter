// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const inputTxt = document.getElementById("text-to-speak");
  const voiceSelect = document.getElementById("voice-select");
  const playButton = document.querySelector("button");
  const faceImage = document.querySelector('img[alt="Smiling face"]');

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    for (const voice of voices) {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;
      
      option.setAttribute("data-lang", voice.lang);
      option.setAttribute("data-name", voice.name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  playButton.onclick = () => {
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption = 
      voiceSelect.selectedOptions[0].getAttribute("data-name");
    
    for (const voice of voices) {
      if (voice.name === selectedOption) {
        utterThis.voice = voice;
      }
    }

    //face change
    utterThis.onstart = () => {
      faceImage.src = 'assets/images/smiling-open.png';
    };
    
    utterThis.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
    };

    synth.speak(utterThis);
    inputTxt.blur();
  };
}