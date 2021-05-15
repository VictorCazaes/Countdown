Notification.requestPermission();
const daysDisplayTextElement = document.querySelector(".days");
const hoursDisplayTextElement = document.querySelector(".hours");
const minutesDisplayTextElement = document.querySelector(".minutes");
const secondsDisplayTextElement = document.querySelector(".seconds");
const resetButton = document.querySelector(".reset");
const alertMensage = document.querySelector("span");
const date = document.querySelector("#date");
const todayTimeToString = new Date().toISOString();
const setMinTime = todayTimeToString.substring(0, todayTimeToString.length - 8);
date.setAttribute("min", setMinTime);

date.addEventListener("change", () => {
    let expectedDate = date.value;
    localStorage.setItem("expectedDate", expectedDate);
});

window.addEventListener("load", () => {
    expectedDate = localStorage.getItem("expectedDate");
    date.value = expectedDate;
});

function setFormat(display, number) {
    if (isNaN(number) || number == 0) {
        display.innerText = "00";
    } else if (number <= 9) {
        display.innerText = `0${Number(number)}`;
    } else {
        display.innerText = Number(number);
    }
};

const countDownInterval = setInterval(() => {
    const today = new Date();
    let newDateString = date.value.replace("T", " ").replace(/-/g, "/");
    const seconds = (new Date(newDateString) - today) / 1000; //convert from milisecond to second
    if (seconds < 0) {
        date.value = "";
        if (localStorage.getItem("expectedDate")) {
            new Notification("It's time!🔔", {
                body: "there is no more time to wait."
            })
        }
        localStorage.clear();
        clearInterval(countDownInterval)
        return;
    }
    const day = Math.floor(seconds / 86400); //convert seconds to days
    setFormat(daysDisplayTextElement, day);
    const hour = Math.floor((seconds % 86400) / 3600);
    setFormat(hoursDisplayTextElement, hour);
    const minute = Math.floor(((seconds % 86400) % 3600) / 60);
    setFormat(minutesDisplayTextElement, minute);
    const timeInSeconds = Math.floor(((seconds % 86400) % 3600) % 60);
    setFormat(secondsDisplayTextElement, timeInSeconds);
}, 1000);//1s

resetButton.addEventListener("click", () => {
    date.value = "";
    localStorage.clear();
});