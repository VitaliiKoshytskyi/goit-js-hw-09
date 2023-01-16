import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputEl = document.querySelector('#datetime-picker')
const startButtonEl = document.querySelector('button')

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

const currentTime = Date.now()
console.log(currentTime)


startButtonEl.setAttribute('disabled', 'true')
flatpickr(inputEl,options)


const addLeadingZero = (value) => {
  return String(value).padStart(2,'0')
}

const convertMs = (ms) => {

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  
  
  const days = Math.floor(ms / day);
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds =addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  return { days, hours, minutes, seconds };
}


const startTimerHandler = () => {
     setInterval(()=>{console.log("hey")},1000)
 }
const inputHandler = () => {
    startButtonEl.removeAttribute('disabled')

    
}

startButtonEl.addEventListener('click', startTimerHandler)
inputEl.addEventListener('input', inputHandler)