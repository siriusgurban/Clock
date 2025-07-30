const second = document.querySelector(".second");

const date = new Date();

date.getSeconds();

function secondHand() {
  let secondDeg = 90 + 6 * date.getSeconds();

  setInterval(() => {
    console.log(date.getSeconds());
    second.style.transform = `rotate(${secondDeg}deg)`;
    secondDeg += 6;
  }, 1000);
}

secondHand();

const minute = document.querySelector(".minute");

function minuteHand() {
  // let minuteDeg = 90 + 6 * date.getMinutes();
  let minuteAdd = 90 + 6 * date.getMinutes();
  minute.style.transform = `rotate(${minuteAdd}deg)`;
  console.log(date.getMinutes(), "minutes");
  let seconds = date.getSeconds();

  let diffSec = 60 - seconds;

  do {
    setInterval(() => {
      minute.style.transform = `rotate(${minuteAdd}deg)`;
      minuteAdd += 6;
    }, diffSec * 1000);
  } while (true);
  {
    setInterval(() => {
      minute.style.transform = `rotate(${minuteAdd}deg)`;
      minuteAdd += 6;
    }, 60000);
  }
}

minuteHand();

const hour = document.querySelector(".hour");
const diffHours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
hour.style.transform = `rotate(${90 + 30 * diffHours}deg)`;
console.log(date.getHours(), "hours");

function hourHand() {
  let hourDeg = 90 + 30 * diffHours;

  setInterval(() => {
    hour.style.transform = `rotate(${hourDeg}deg)`;
    hourDeg += 30;
  }, 360000);
}

hourHand();
