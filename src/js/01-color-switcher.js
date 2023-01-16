const startBtnEl = document.querySelector('[data-start]')
const stopBtnEl = document.querySelector('[data-stop]')
const bodyEl = document.querySelector('body')

stopBtnEl.setAttribute('disabled', 'true')
 let timerId = null
const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startHandler = () => {
    startBtnEl.setAttribute('disabled', 'true')
    stopBtnEl.removeAttribute('disabled')
   timerId = setInterval(()=>{ bodyEl.style.backgroundColor = (getRandomHexColor())},1000)

}
const stopHandler = (event) => {
    stopBtnEl.setAttribute('disabled', 'true')
    startBtnEl.removeAttribute('disabled') 
    clearInterval(timerId)
}


startBtnEl.addEventListener('click', startHandler)
stopBtnEl.addEventListener('click',stopHandler)
