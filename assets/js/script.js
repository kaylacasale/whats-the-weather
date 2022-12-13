var datePEl = document.querySelector(".date");
var today = dayjs().format('MMM D, YYYY');
datePEl.textContent = today;

var timePEl = document.querySelector(".time");

var time = dayjs().format('h:mm A');
timePEl.textContent = time;

var navEl = document.querySelector("nav");
//navEl.setAttribute('class', 'shadow-lg row')