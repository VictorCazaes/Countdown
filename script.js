//input countdown
class Countdown {
    constructor(secondsDisplayTextElement, alertMensage) {
        this.secondsDisplayTextElement = secondsDisplayTextElement;
        this.alertMensage = alertMensage;
        this.reset()
    }

    reset() {
        this.secondCounter = 0
        clearInterval(this.myInterval)
    }

    secondsInterval(seconds) {
        let i = seconds
        if (i > 59 || i < 0) {
            console.log("Use a number between 0s - 59s")
            this.alertMensage.innerText = "Use a number between 0s - 59s"
        } else {
            this.myInterval = setInterval(() => {
                this.secondCounter = i
                i -= 1
                this.updateDisplay()
                console.log(this.secondCounter)
                if (i < 0) {
                    console.log("zero right here")
                    clearInterval(this.myInterval)
                }
            }, 1000)//1s
        }
    }

    updateDisplay() {
        this.secondsDisplayTextElement.value = this.secondCounter;
        this.alertMensage.innerText = ""
    }
}

const daysDisplayTextElement = document.querySelector(".days")
const hoursDisplayTextElement = document.querySelector(".hours")
const minutesDisplayTextElement = document.querySelector(".minutes")
const secondsDisplayTextElement = document.querySelector(".seconds")
const startButton = document.querySelector(".start")
const resetButton = document.querySelector(".reset")
const alertMensage = document.querySelector("span")
const date = document.querySelector("#date")
const countdown = new Countdown(secondsDisplayTextElement, alertMensage)

startButton.addEventListener("click", () => {
    countdown.secondsInterval(secondsDisplayTextElement.value)
})

resetButton.addEventListener("click", () => {
    countdown.reset()
    countdown.updateDisplay()
})


// date countdown
const countDownInterval = setInterval(() => {
    let today = new Date();
    let timeInMilisenconds = Date.parse(today)//convert date to miliseconds
    let seconds = (date.valueAsNumber - timeInMilisenconds) / 1000//convert from milisecond to second
    const day = Math.floor(seconds / 86400) //convert seconds to days
    daysDisplayTextElement.value = day
    const hour = Math.floor((seconds % 86400) / 3600)
    hoursDisplayTextElement.value = hour
    const minute = Math.floor(((seconds % 86400) % 3600) / 60)
    minutesDisplayTextElement.value = minute
    const timeInSeconds = ((seconds % 86400) % 3600) % 60
    secondsDisplayTextElement.value = timeInSeconds
}, 1000);


// let d = new Date();
// let nova = Date.parse(d)
// console.log(nova)

// let seconds = (date.valueAsNumber - nova) / 1000//convert from milisecond to second

// console.log("time total in seconds " + seconds)
// const day = Math.floor(seconds / 86400) //convert seconds to days
// console.log("time in days " + day)
// const hour = Math.floor((seconds % 86400) / 3600)
// console.log("time in hours " + hour)
// const minute = Math.floor(((seconds % 86400) % 3600) / 60)
// console.log("time in minutes " + minute)
// const timeInSeconds = ((seconds % 86400) % 3600) % 60
// secondsDisplayTextElement.value = timeInSeconds
// console.log("time in seconds " + timeInSeconds)

// const day = Math.floor(result / 24)
// console.log(day)//convert from hour to day
// const hourLeft = result % 24
// console.log(hourLeft)
// console.log(result * 60)//convert from hour to minute
// console.log(result * 60 * 60)//convert from minute to second