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

class Queen {
  constructor() {
    this.position = Object.assign({}, pos);
    this.uuid = [];
  }
  nQueen = async () => {
    Board = 0;
    this.position[`${Board}`] = {};
    numberbox.disabled = true;
    await q.solveQueen(Board, 0, n);
    await q.clearColor(Board);
    numberbox.disabled = false;
  };

  isValid = async (board, r, col, n) => {
    const table = document.getElementById(`table-${this.uuid[board]}`);
    const currentRow = table.firstChild.childNodes[r];
    const currentColumn = currentRow.getElementsByTagName("td")[col];
    currentColumn.innerHTML = queen;
    await q.delay();
    //column check
    for (let i = r - 1; i >= 0; i--) {
      const row = table.firstChild.childNodes[i];
      const column = row.getElementsByTagName("td")[col];
      const value = column.innerHTML;
      if (value == queen) {
        column.style.backgroundColor = "#FB5607";
        currentColumn.innerHTML = "-";
        return false;
      }
      column.style.backgroundColor = "#ffca3a";
      await q.delay();
    }

    //diagonal check 
    for (let i = r - 1, j = col - 1; i >= 0 && j >= 0; --i, --j) {
      const row = table.firstChild.childNodes[i];
      const column = row.getElementsByTagName("td")[j];
      const value = column.innerHTML;

      if (value == queen) {
        column.style.backgroundColor = "#fb5607";
        currentColumn.innerHTML = "-";
        return false;
      }
      column.style.backgroundColor = "#ffca3a";
      await q.delay();
    }
  };

  clearColor = async (board) => {
    for (let j = 0; j < n; j++) {
      const table = document.getElementById(`table-${this.uuid[board]}`);
      const row = table.firstChild.childNodes[j];
      for (let k = 0; k < n; ++k)
        (j + k) & 1
          ? (row.getElementsByTagName("td")[k].style.backgroundColor =
              "#FF9F1C")
          : (row.getElementsByTagName("td")[k].style.backgroundColor =
              "#FCCD90");
    }
  };

  delay = async () => {
    await new Promise((done) => setTimeout(() => done(), speed));
  };

  solveQueen = async (board, r, n) => {
    if (r == n) {
      ++Board;
      let table = document.getElementById(`table-${this.uuid[Board]}`);
      for (let k = 0; k < n; ++k) {
        let row = table.firstChild.childNodes[k];
        row.getElementsByTagName("td")[this.position[board][k]].innerHTML =
          queen;
      }
      this.position[Board] = this.position[board];
      return;
    }

    for (let i = 0; i < n; ++i) {
      await q.delay();
      await q.clearColor(board);
      if (await q.isValid(board, r, i, n)) {
        await q.delay();
        await q.clearColor(board);
        let table = document.getElementById(`table-${this.uuid[board]}`);
        let row = table.firstChild.childNodes[r];
        row.getElementsByTagName("td")[i].innerHTML = queen;

        this.position[board][r] = i;

        if (await q.solveQueen(board, r + 1, n)) await q.clearColor(board);

        await q.delay();
        board = Board;
        table = document.getElementById(`table-${this.uuid[board]}`);
        row = table.firstChild.childNodes[r];
        row.getElementsByTagName("td")[i].innerHTML = "-";

        delete this.position[`${board}`][`${r}`];
      }
    }
  };
}

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
