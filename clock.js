const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const digital = document.querySelector('.digital');

const timezones = {
    'Brisbane' : 10,
    'Sydney' : 11,
    'Canberra' : 11,
    'Melbourne' : 11,
    'Hobart' : 11,
    'Adelaide' : 10.5,
    'Darwin' : 10.5,
    'Perth' : -8
}

const zone = document.getElementById('time-zone')
zone.addEventListener('change', setDate);

const twelveOrTwentyFour = document.getElementById('24');
var timeFormat = twelveOrTwentyFour.value;

//add leading zero
function pad(n) {return n<10 ? '0'+n : n;}

function setDate() {
    const now = new Date();
    var zone = document.getElementById('time-zone').value;
    var offset = timezones[zone];
    now.setMinutes(now.getUTCMinutes() + (60 * offset));
    
    
    //second hand
    const seconds = now.getUTCSeconds();
    const secondsDegrees = (seconds * (360/60)) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;


    //minute hand
    const minutes = now.getUTCMinutes();
    const minutesDegrees = (minutes * (360/60)) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    //hour hand
    var hours = now.getUTCHours();
    if (hours > 12 && timeFormat == 12){
        hours -= 12;
    }
    const hourDegrees = (hours * (360/12)) +90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;


    //add leading zero
    var time = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
    digital.innerHTML = time;
}

setInterval(setDate, 1000);

var test = timezone.map(zone => 
    `<option>${zone.text}</option>`);

