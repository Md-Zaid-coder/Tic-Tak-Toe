const boxes = document.querySelectorAll(".box");
const msgContainer = document.querySelector(".msg-container");
const msg = document.querySelector("#msg");
const resetBtn = document.querySelector("#reset-btn");
const newGameBtn = document.querySelector("#new-btn");

// Mode buttons
const btnAI = document.querySelector("#btn-ai");
const btnPVP = document.querySelector("#btn-pvp");

let isAI = false;  // default: Player vs Player
let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "O";
let gameRunning = true;

const winPatterns = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

// ----------------------------
// MODE SWITCH (MAIN FIX)
// ----------------------------
btnAI.addEventListener("click", () => {
  isAI = true;
  resetBoard();
});

btnPVP.addEventListener("click", () => {
  isAI = false;
  resetBoard();
});

// ----------------------------
// GAME LOGIC
// ----------------------------
boxes.forEach(box => {
  box.addEventListener("click", () => makeMove(box));
});

function makeMove(box) {
  const index = box.dataset.index;

  if (board[index] !== "" || !gameRunning) return;

  board[index] = currentPlayer;
  box.innerText = currentPlayer;
  box.dataset.value = currentPlayer; 

  if (checkWinner()) return;

  // SWITCH PLAYER
  currentPlayer = currentPlayer === "O" ? "X" : "O";

  // AI MOVE IF MODE IS AI
  if (isAI && currentPlayer === "X" && gameRunning) {
    setTimeout(aiMove, 400);
  }
}

function aiMove() {
  // Very simple AI: choose a random empty box
  let empty = board
    .map((value, index) => (value === "" ? index : null))
    .filter(v => v !== null);

  if (empty.length === 0) return;

  let choice = empty[Math.floor(Math.random() * empty.length)];

  board[choice] = "X";
  boxes[choice].innerText = "X";
  boxes[choice].dataset.value = "X"; 

  if (checkWinner()) return;

  currentPlayer = "O"; // back to human
}

// ----------------------------
// CHECK WIN / DRAW
// ----------------------------
function checkWinner() {
  for (let pattern of winPatterns) {
    let [a, b, c] = pattern;

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      showWinner(board[a]);
      gameRunning = false;
      return true;
    }
  }

  if (!board.includes("")) {
    showWinner("Draw");
    return true;
  }

  return false;
}

function showWinner(winner) {
  msgContainer.classList.remove("hide");
  msg.innerText = winner === "Draw" ? "Match Draw" : `${winner} Wins!`;
}

// ----------------------------
// RESET
// ----------------------------
resetBtn.addEventListener("click", resetBoard);
newGameBtn.addEventListener("click", resetBoard);

function resetBoard() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "O";
  gameRunning = true;
  boxes.forEach(b => {
  b.innerText = "";
  delete b.dataset.value;   // ⭐ remove glow
});

  msgContainer.classList.add("hide");
}

