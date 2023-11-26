const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

const handHours = document.querySelector('#hour');
const handMinutes = document.querySelector('#minutes');
const handSeconds = document.querySelector('#seconds');
const ampm = document.querySelector('#ampm');

function getCurrentTime() {
  let date = new Date();
  let currentHour = date.getHours();
  let currentMinutes = date.getMinutes();
  let currentSeconds = date.getSeconds(); 

  let am = currentHour >= 12 ? 'PM' : 'AM';

  //Convert 24hr clock to 12h clock

  if(currentHour > 12) {
    currentHour = currentHour - 12
  }

  ampm.innerText = am

  //Digital clock
  hr.style.transform = `rotate(${currentHour * 30 + currentMinutes / 2}deg)`;
  mn.style.transform = `rotate(${currentMinutes * 6}deg)`;
  sc.style.transform = `rotate(${currentSeconds * 6}deg)`;

  // add zero before single digit number
  currentHour = (currentHour < 10) ?  "0" + currentHour : currentHour;
  currentMinutes = (currentMinutes < 10) ?  "0" + currentMinutes : currentMinutes;
  currentSeconds = (currentSeconds < 10) ?  "0" + currentSeconds : currentSeconds;

  handHours.innerText = currentHour;
  handMinutes.innerText = currentMinutes;
  handSeconds.innerText = currentSeconds;

}
getCurrentTime();

setInterval(getCurrentTime, 1000);
