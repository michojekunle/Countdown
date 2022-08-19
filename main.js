const dayEl = document.querySelector('.dayNM');
const hourEl = document.querySelector('.hourNM');
const minutesEl = document.querySelector('.minutesNM');
const secondsEl = document.querySelector('.secondsNM');
const newYearEl = document.querySelector('.new-year');



function updateTime() {
    const now = new Date();
    const eventYear = now.getFullYear() + 1;
    newYearEl.innerHTML = eventYear;
    console.log(eventYear)
    const newYear = new Date(`${eventYear}`);
    console.log(newYear);
    const currentTime = now.getTime();
    const newYearTime = newYear.getTime();

    const remTime = newYearTime - currentTime;

    var seconds = Math.floor(((remTime / 1000) % 60));
    console.log(seconds)

    var minutes = Math.floor(((remTime / (60 * 1000)) % 60));
    console.log(minutes)
    
    var hours = Math.floor(((remTime / (60 * 60 * 1000)) %  24));
    console.log(hours)
    
    var days = Math.floor(((remTime / (24 * 60 * 60 * 1000))));
    console.log(days)

    dayEl.innerHTML = days > 9? days: `0${days}`;
    hourEl.innerHTML = hours > 9? hours: `0${hours}`;
    minutesEl.innerHTML = minutes > 9? minutes: `0${minutes}`;
    secondsEl.innerHTML = seconds > 9? seconds: `0${seconds}`;
    
}

setInterval(updateTime, 1000);