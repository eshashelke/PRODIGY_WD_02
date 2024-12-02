let startTime;
let elapsedTime = 0;
let timerInterval;

function start() {
  if (!timerInterval) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateDisplay, 10);
    document.getElementById("startStop").textContent = "Stop";
  } else {
    stop();
    document.getElementById("startStop").textContent = "Start";
  }
}

function stop() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function reset() {
  stop();
  elapsedTime = 0;
  updateDisplay();
  document.querySelector(".laps").innerHTML = "";
}

function lap() {
  const lapTime = Date.now() - startTime;
  const formattedTime = formatTime(lapTime);
  const lapItem = document.createElement("li");
  lapItem.textContent = formattedTime;
  document.querySelector(".laps").appendChild(lapItem);
}

function updateDisplay() {
  const elapsedTime = Date.now() - startTime;
  document.querySelector(".display").textContent = formatTime(elapsedTime);
}

function formatTime(time) {
  const date = new Date(time);
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  const milliseconds = date.getMilliseconds().toString().padStart(3, "0");
  return `${minutes}:${seconds}:${milliseconds.substr(0, 2)}`;
}

document.getElementById("startStop").addEventListener("click", start);
document.getElementById("lap").addEventListener("click", lap);
document.getElementById("reset").addEventListener("click", reset);