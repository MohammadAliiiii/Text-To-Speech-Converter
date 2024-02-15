let speechSynthesis = new SpeechSynthesisUtterance();

document.querySelector('#playButton').addEventListener('click', () => {
    speechSynthesis.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speechSynthesis);
});

let voices = [];
let voiceSelect = document.querySelector('select');

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speechSynthesis.voice = voices[0];

    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });
};
voiceSelect.addEventListener('change', () =>{
    speechSynthesis.voice = voices[voiceSelect.value];
})


