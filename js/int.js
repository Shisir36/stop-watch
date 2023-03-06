// Define variables
let seconds = 0;
let minutes = 0;
let hours = 0;
let display = document.getElementById("display");
let interval;

// Start the stopwatch
document.getElementById("start-btn").addEventListener("click", function () {
  clearInterval(interval);
  interval = setInterval(startTimer, 1000);
});

// Stop the stopwatch
document.getElementById("stop-btn").addEventListener("click", function () {
  clearInterval(interval);
});

// Reset the stopwatch
document.getElementById("reset-btn").addEventListener("click", function () {
  clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  display.innerHTML = "00:00:00";
});

// Start the timer
function startTimer() {
  seconds++;

  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes == 60) {
    minutes = 0;
    hours++;
  }

  let sec = seconds < 10 ? "0" + seconds : seconds;
  let min = minutes < 10 ? "0" + minutes : minutes;
  let hr = hours < 10 ? "0" + hours : hours;

  display.innerHTML = `${hr}:${min}:${sec}`;
}