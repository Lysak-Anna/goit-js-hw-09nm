import { Notify } from 'notiflix/build/notiflix-notify-aio';
function createPromise(position, delay) {
  
  return new Promise((resolve, reject) => {
    
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
  
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay);
  })
  
}

const form = document.querySelector('.form');
form.addEventListener('submit', formSubmitHandler);


function formSubmitHandler(event) {
  event.preventDefault();
  const { elements: { delay, step, amount } } = event.currentTarget;
  let position = 0;
  let times = amount.value;
  let sumOfDelay = Number.parseInt(delay.value);
  
  timerId = setInterval(() => {
    
    if (times === 1) {
      clearInterval(timerId);
    }
    
    position += 1;
    
    createPromise(position, sumOfDelay)
  .then(({ position, delay }) => {
    
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
   sumOfDelay += Number.parseInt(step.value);
   times -= 1;
   
  }, step.value)
   
}
