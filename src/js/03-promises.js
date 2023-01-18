import Notiflix from "notiflix";

const formEl = document.querySelector('.form')

let delay = null;
let amount = null;
let delayStep = null;



function createPromise(position, delay) {

  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
    
    resolve({position,delay})
  } 
    
    reject({position,delay})
  
    },delay)
  })
  
}


const submitHandler = (event) => {
event.preventDefault()
   amount = Number(formEl.elements.amount.value);
   delayStep = Number(formEl.elements.step.value);
   delay = Number(formEl.elements.delay.value);

    for (let position = 1; position < amount; position += 1){
        createPromise(position , delay)
            .then(data => Notiflix.Notify.success(`Fulfilled promise ${data.position} in ${data.delay} `))
            .catch(data => Notiflix.Notify.failure(`Rejected promise ${data.position} in ${data.delay} `))
        delay += delayStep
        // console.log(delay)
    }
    
    // console.log(firstDelay, delayStep, amount)
    
}


formEl.addEventListener('submit',submitHandler)




