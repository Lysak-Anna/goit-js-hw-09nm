
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const body = document.querySelector('body');

startButton.addEventListener('click', startButtonClickHandler);
stopButton.addEventListener('click', stopButtonClickHandler);

function startButtonClickHandler(event) {
    
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
        startButton.setAttribute('disabled', 'true');
    }, 1000);
}

function stopButtonClickHandler(event) {
    clearInterval(timerId);
    startButton.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


