let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;
let isRunning = false;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

function updateDisplay() {

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  display.innerHTML = `${h} : ${m} : ${s}`;
}

function stopwatch() {

  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  updateDisplay();
}

document.getElementById("startBtn").addEventListener("click", () => {

  if (!isRunning) {
    timer = setInterval(stopwatch, 1000);
    isRunning = true;
  }

});

document.getElementById("pauseBtn").addEventListener("click", () => {

  clearInterval(timer);
  isRunning = false;

});

document.getElementById("resetBtn").addEventListener("click", () => {

  clearInterval(timer);

  seconds = 0;
  minutes = 0;
  hours = 0;

  isRunning = false;

  updateDisplay();

  laps.innerHTML = "";

});

document.getElementById("lapBtn").addEventListener("click", () => {

  if (hours === 0 && minutes === 0 && seconds === 0) {
    return;
  }

  const lapItem = document.createElement("li");

  const lapCount = laps.children.length + 1;

  lapItem.innerHTML = `
    <span>Lap ${lapCount}</span>
    <span>${display.innerHTML}</span>
  `;

  laps.prepend(lapItem);

});

updateDisplay();