let hours = document.querySelector('.hours__time');
let minutes = document.querySelector('.minutes__time');
let seconds = document.querySelector('.seconds__time');
let hoursLine = document.querySelector('.hours__line');
let minutesLine = document.querySelector('.minutes__line');
let secondsLine = document.querySelector('.seconds__line');
let hoursDot = document.querySelector('.hours__dot');
let minutesDot = document.querySelector('.minutes__dot');
let secondsDot = document.querySelector('.seconds__dot');
let dayPart = document.querySelector('.time-part');
const clockButton = document.querySelector('.clock-mode');

setInterval(() => {
    let localHours = new Date().getHours();
    let localMinutes = new Date().getMinutes();
    let localSeconds = new Date().getSeconds();
    if (clockButton.checked == true) {
        localHours = changeTimeFormat(localHours);
        dayPart.innerHTML = changeDayFormat(localHours + 12)
    }

    hours.innerHTML = addZero(localHours);
    minutes.innerHTML = addZero(localMinutes);
    seconds.innerHTML = addZero(localSeconds);
    moveCircleLine(localHours, localMinutes, localSeconds)
    moveDots(localHours, localMinutes, localSeconds);

})

function moveDots(localHours, localMinutes, localSeconds) {
    hoursDot.style.transform = `rotate(${localHours*15}deg)`;
    minutesDot.style.transform = `rotate(${localMinutes*6}deg)`;
    secondsDot.style.transform = `rotate(${localSeconds*6}deg)`;
}

function moveCircleLine(localHours, localMinutes, localSeconds) {
    hoursLine.style.strokeDashoffset = 440 - (440 * localHours) / 24;
    minutesLine.style.strokeDashoffset = 440 - (440 * localMinutes) / 60;
    secondsLine.style.strokeDashoffset = 440 - (440 * localSeconds) / 60;
}

function addZero(time) {
    if (time < 10) {
        time = '0' + time
    }
    return time;
}

function changeTimeFormat(hours) {

    if (hours > 12) {
        hours = hours - 12;
    }
    return hours
}

function changeDayFormat(hours) {
    let dayPart;
    if (hours > 12) {
        dayPart = 'PM'
    } else {
        dayPart = 'AM'
    }
    return dayPart;
}