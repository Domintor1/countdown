const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const releaseDate = document.querySelector('.release');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');


let futureDate = new Date(2022, 10, 11, 08, 30, 00)

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const day = futureDate.getDay();
console.log(day);
const month = futureDate.getMonth();


releaseDate.textContent = `Movie is released on ${day}/${month}/${year} at ${hours}:${minutes} o'clocks `;

// future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;


  const oneDay = 1000 * 60 * 60 * 24;
  const oneHour = 1000 * 60 * 60;
  const oneMinute = 60 * 1000;
  // calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  //console.log(hours)
  let minutes = Math.floor((t % oneHour) / oneMinute);
  //console.log(minutes)
  let seconds = Math.floor((t % oneMinute) / 1000)
  //console.log(seconds);

  // set values arrays

  const values = [days, hours, minutes, seconds];
  //console.log(values);
  //console.log(`this item will come in ` + values[0] + `days, ` + hours + ' hours');

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  })


  if(t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class='expired'> This movie has now been released! Enjoy!</h4> `;
  }


  //countdown



}
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime()


// regex to match all capital letters a string 

// coundown from when arsenal last won the premier league.