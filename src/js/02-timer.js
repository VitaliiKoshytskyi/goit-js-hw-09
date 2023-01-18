import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputEl = document.querySelector('#datetime-picker')
const startButtonEl = document.querySelector('button')
const daysEl = document.querySelector('[data-days]')
const hoursEl = document.querySelector('[data-hours]')
const minutesEl = document.querySelector('[data-minutes]')
const secEl = document.querySelector('[data-seconds]')

startButtonEl.setAttribute('disabled', 'true')


let timerID = null ;
let selectedDate = null;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
     
      if (selectedDates[0] >= new Date()) {
          startButtonEl.removeAttribute('disabled')
         selectedDate = selectedDates[0]
      } else {
          startButtonEl.setAttribute('disabled', 'true')
          return alert("Please choose a date in the future")
        }
       
  },
};

flatpickr(inputEl,options)

const addLeadingZero = (value) => {
  return String(value).padStart(2,'0')
}

const convertMs = (ms) => {

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  
  
  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds =addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  return { days, hours, minutes, seconds };
}

const timeCounterHandler = () => {
    const currentDate = new Date();
    const deltaDate = selectedDate - currentDate;
    const timeComponents = convertMs(deltaDate)
   
    if ( deltaDate >= 0) {
        daysEl.textContent = timeComponents.days
        hoursEl.textContent = timeComponents.hours
        minutesEl.textContent = timeComponents.minutes
        secEl.textContent = timeComponents.seconds
    
    } else {
        alert('Woooohooo!!!')
        clearInterval(timerID)
    }
}


const startTimerHandler = () => {
     
    timerID = setInterval(timeCounterHandler, 1000)
    inputEl.setAttribute("disabled", "true")
    startButtonEl.setAttribute('disabled', 'true')

 }


startButtonEl.addEventListener('click', startTimerHandler)






