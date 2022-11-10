import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const startButton = document.querySelector('[data-start]');
startButton.setAttribute('disabled', true);
startButton.addEventListener('click', startButtonClickHandler);

let differenceBetweenDates = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    
  onClose (selectedDates) {
       
        const valid = selectedDates[0].getTime() > new Date().getTime();
        differenceBetweenDates = selectedDates[0].getTime() - new Date().getTime();
        if (valid === false) {
            startButton.setAttribute('disabled', true);
            return Notify.failure("Please choose a date in the future");
        }
        startButton.removeAttribute('disabled');
   
  },
}; 


const myInput = document.querySelector("input#datetime-picker");
const fp = flatpickr(myInput, options); 

const daysOfTimer = document.querySelector('[data-days]');
const hoursOfTimer = document.querySelector('[data-hours]');
const minutesOfTimer = document.querySelector('[data-minutes]');
const secondsOfTimer = document.querySelector('[data-seconds]');


function updateInterface(someDate) {
const convertDate = convertMs(someDate);
  const { days, hours, minutes, seconds } = convertDate;
 
  daysOfTimer.textContent = addLeadingZero(days);
  hoursOfTimer.textContent = addLeadingZero(hours);
  minutesOfTimer.textContent = addLeadingZero(minutes);
  secondsOfTimer.textContent = addLeadingZero(seconds);
  
}

function startButtonClickHandler(event) {
  
  timerId = setInterval(() => {
      startButton.setAttribute('disabled', true);
      updateInterface(differenceBetweenDates); 
      differenceBetweenDates -= 1000;
      if (differenceBetweenDates <= 0) {
        clearInterval(timerId);
      }
    }, 1000);
}
function addLeadingZero(value) {
  const valueToString = value.toString();
  const changedValue = valueToString.padStart(2, '0');
  return (changedValue);
 
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}






