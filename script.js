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
    const today = new Date();
    const timeInMilisenconds = Date.parse(today)//convert date to miliseconds
    const seconds = (date.valueAsNumber - timeInMilisenconds) / 1000//convert from milisecond to second
    const day = Math.floor(seconds / 86400) //convert seconds to days
    if (isNaN(day) || day == 0) {
        daysDisplayTextElement.value = "000"
    } else {
        daysDisplayTextElement.value = day
    }
    const hour = Math.floor((seconds % 86400) / 3600)
    if (isNaN(hour) || hour == 0) {
        hoursDisplayTextElement.value = "00"
    } else {
        hoursDisplayTextElement.value = hour
    }
    const minute = Math.floor(((seconds % 86400) % 3600) / 60)
    if (isNaN(minute) || minute == 0) {
        minutesDisplayTextElement.value = "00"
    } else {
        minutesDisplayTextElement.value = minute
    }
    const timeInSeconds = ((seconds % 86400) % 3600) % 60
    if (isNaN(timeInSeconds) || timeInSeconds == 0) {
        secondsDisplayTextElement.value = "00"
    } else {
        secondsDisplayTextElement.value = timeInSeconds
    }
}, 1000);