// //input countdown
// class Countdown {
//     constructor(secondsDisplayTextElement, alertMensage) {
//         this.secondsDisplayTextElement = secondsDisplayTextElement;
//         this.alertMensage = alertMensage;
//         this.reset()
//     }

//     reset() {
//         this.secondCounter = 0
//         clearInterval(this.myInterval)
//     }

//     secondsInterval(seconds) {
//         let i = seconds
//         if (i > 59 || i < 0) {
//             this.alertMensage.innerText = "Use a number between 0s - 59s"
//         } else {
//             this.myInterval = setInterval(() => {
//                 this.secondCounter = i
//                 i -= 1
//                 this.updateDisplay()
//                 console.log(this.secondCounter)
//                 if (i < 0) {
//                     clearInterval(this.myInterval)
//                 }
//             }, 1000)//1s
//         }
//     }

//     updateDisplay() {
//         this.secondsDisplayTextElement.value = this.secondCounter;
//         this.alertMensage.innerText = ""
//     }
// }

const daysDisplayTextElement = document.querySelector(".days")
const hoursDisplayTextElement = document.querySelector(".hours")
const minutesDisplayTextElement = document.querySelector(".minutes")
const secondsDisplayTextElement = document.querySelector(".seconds")
// const startButton = document.querySelector(".start")
const resetButton = document.querySelector(".reset")
const alertMensage = document.querySelector("span")
const date = document.querySelector("#date")
const todayTimeToString = new Date().toISOString()
const setMinTime = todayTimeToString.substring(0, todayTimeToString.length - 8)
date.setAttribute("min", setMinTime)
// const countdown = new Countdown(secondsDisplayTextElement, alertMensage)

// startButton.addEventListener("click", () => {
//     countdown.secondsInterval(secondsDisplayTextElement.value)
// })

resetButton.addEventListener("click", () => {
    date.value = null
})


// date countdown
const countDownInterval = setInterval(() => {
    const today = new Date();
    const timeInMilisenconds = Date.parse(today)//convert date to miliseconds
    const seconds = (date.valueAsNumber - timeInMilisenconds) / 1000//convert from milisecond to second
    const day = Math.floor(seconds / 86400) //convert seconds to days
    if (isNaN(day) || day == 0) {
        daysDisplayTextElement.innerText = "000"
    } else if (day < 100) {
        daysDisplayTextElement.innerText = `0${day}`
    } else if (day < 10) {
        daysDisplayTextElement.innerText = `00${day}`
    } else {
        daysDisplayTextElement.innerText = `${day}`
    }
    const hour = Math.floor((seconds % 86400) / 3600)
    if (isNaN(hour) || hour == 0) {
        hoursDisplayTextElement.innerText = "00"
    } else if (hour < 10) {
        hoursDisplayTextElement.innerText = `0${hour}`
    } else {
        hoursDisplayTextElement.innerText = `${hour}`
    }
    const minute = Math.floor(((seconds % 86400) % 3600) / 60)
    if (isNaN(minute) || minute == 0) {
        minutesDisplayTextElement.innerText = "00"
    } else if (minute < 10) {
        minutesDisplayTextElement.innerText = `0${minute}`
    } else {
        minutesDisplayTextElement.innerText = `${minute}`
    }
    const timeInSeconds = ((seconds % 86400) % 3600) % 60
    if (isNaN(timeInSeconds) || timeInSeconds == 0) {
        secondsDisplayTextElement.innerText = "00"
    } else if (timeInSeconds < 10) {
        secondsDisplayTextElement.innerText = `0${timeInSeconds}`
    } else {
        secondsDisplayTextElement.innerText = `${timeInSeconds}`
    }
}, 1000);//1s