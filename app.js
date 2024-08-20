const progressBar = document.getElementById("progress-bar");
const slider = document.getElementById("slider");
const text = document.getElementById("textt");

let speed,
  n,
  tempSpeed,
  q,
  Board = 0;

speed = (100 - slider.value) * 10;
tempSpeedpeed = (100 - slider.value) * 10;

slider.oninput = function () {
  progressBar.style.width = this.value + "%";
  speed = slider.value;
  speed = (100 - speed) * 10;
};

const playButton = document.getElementById("play-button");

playButton.onclick = async function visualise() {
  const chessBoard = document.getElementById("n-queen-board");
  const arrangement = document.getElementById("queen-arrangement");
  const numberbox = document.getElementById("numberbox");
  n = numberbox.value;
  q = new Queen();

  if (n > 8) {
    numberbox.value = "";
    alert("Too large board size");
    return;
  } else if (n < 1) {
    numberbox.value = "";
    alert("Too small board size");
    return;
  }
};
