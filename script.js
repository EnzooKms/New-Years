const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')
const titre = document.getElementById("titre")

let date = prompt("Quel date ?")

while(new Date(date) == "Invalid Date") {

if(new Date(date) == "Invalid Date") {
     alert("Date invalide")
     date = prompt("Quel date ?")
}
else break

}

let newYears = date 

titre.innerHTML = `Réveillon de Nouvel an : ${newYears}`

function countdown() {
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()

    const totalSeconds = (newYearsDate - currentDate) / 1000

    const days = Math.floor(totalSeconds / 3600 / 24)

    const hours = Math.floor(totalSeconds / 3600) % 24

    const minutes = Math.floor(totalSeconds / 60) % 60

    const seconds = Math.floor(totalSeconds) % 60

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time
}

countdown()

setInterval(countdown, 1000)