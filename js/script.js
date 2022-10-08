let hours = document.querySelector('.hours__time');
let minutes = document.querySelector('.minutes__time');
let seconds = document.querySelector('.seconds__time');
let hoursLine = document.querySelector('.hours__line');
let minutesLine = document.querySelector('.minutes__line');
let secondsLine = document.querySelector('.seconds__line');
let hoursDot = document.querySelector('.hours__dot');
let minutesDot = document.querySelector('.minutes__dot');
let secondsDot = document.querySelector('.seconds__dot');

setInterval(() => {
    let localHours = new Date().getHours();
    let localMinutes = new Date().getMinutes();
    let localSeconds = new Date().getSeconds();

    hours.innerHTML = localHours;
    minutes.innerHTML = localMinutes;
    seconds.innerHTML = localSeconds;
    hoursLine.style.strokeDashoffset = 440 - (440 * localHours) / 24;
    minutesLine.style.strokeDashoffset = 440 - (440 * localMinutes) / 60;
    secondsLine.style.strokeDashoffset = 440 - (440 * localSeconds) / 60;
    hoursDot.style.transform = `rotate(${localHours*15}deg)`;
    minutesDot.style.transform = `rotate(${localMinutes*6}deg)`;
    secondsDot.style.transform = `rotate(${localSeconds*6}deg)`;

})