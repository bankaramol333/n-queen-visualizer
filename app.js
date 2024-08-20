const progressBar = document.getElementById("progress-bar");
const slider = document.getElementById("slider");
const text = document.getElementById("textt");

slider.oninput = function () {
  progressBar.style.width = this.value + "%";
};
