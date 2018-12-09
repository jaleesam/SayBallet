window.SpeechRecognition= window.webkitSpeechRecognition || window.SpeechRecognition;

const recognition = new SpeechRecognition();

const icon = document.querySelector('i.fa,fa-microphone')
let paragraph = document.createElement('p');
let container = document.querySelector('.text-box');
 
container.appendChild(paragraph);

const sound = document.querySelector('.sound');

icon.addEventListener('click', () => {
    sound.play();
    dictate();
});

const dictate = () => {
    recognition.start();
}