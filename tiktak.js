const boxes = document.querySelectorAll(".box");
const msgContainer = document.querySelector(".msg-container");
const msg = document.querySelector("#msg");
const resetBtn = document.querySelector("#reset-btn");
const newGameBtn = document.querySelector("#new-btn");

const btnAI = document.querySelector("#btn-ai");
const btnPVP = document.querySelector("#btn-pvp");

let isAI = false;
let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "O";
let gameRunning = true;




/* -------------------------
   DIFFICULTY CONTROL
   change this value
   0.5 = easy
   0.7 = medium
   0.85 = hard
--------------------------*/
const AI_SMARTNESS = 0.75;

const winPatterns = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];


/* =========================
   MODE SWITCH
========================= */
btnAI.addEventListener("click", () => {
  isAI = true;
  resetBoard();
});

btnPVP.addEventListener("click", () => {
  isAI = false;
  resetBoard();
});


/* =========================
   CLICK HANDLER
========================= */
boxes.forEach(box => {
  box.addEventListener("click", () => makeMove(box));
});


function makeMove(box) {
  const index = box.dataset.index;

  if (board[index] !== "" || !gameRunning) return;

  playMove(index, currentPlayer);

  if (checkWinner()) return;

  currentPlayer = currentPlayer === "O" ? "X" : "O";

  if (isAI && currentPlayer === "X" && gameRunning) {
    setTimeout(aiMove, 350);
  }
}


/* =========================
   PLAY MOVE
========================= */
function playMove(index, player){
  board[index] = player;
  boxes[index].innerText = player;
  boxes[index].classList.add(player);
}


/* =========================
   AI MOVE (HYBRID)
========================= */
function aiMove() {

  let move;

  // SMART MOVE (minimax)
  if (Math.random() < AI_SMARTNESS) {
    move = bestMove();
  }
  // RANDOM MISTAKE
  else {
    let empty = board
      .map((v,i)=> v==="" ? i : null)
      .filter(v=>v!==null);

    move = empty[Math.floor(Math.random()*empty.length)];
  }

  playMove(move, "X");

  if (checkWinner()) return;

  currentPlayer = "O";
}


/* =========================
   MINIMAX (SMART AI)
========================= */
function bestMove() {

  let bestScore = -Infinity;
  let move;

  for (let i = 0; i < 9; i++) {
    if (board[i] === "") {
      board[i] = "X";
      let score = minimax(board, false);
      board[i] = "";

      if (score > bestScore) {
        bestScore = score;
        move = i;
      }
    }
  }

  return move;
}


function minimax(newBoard, isMaximizing) {

  let result = evaluate(newBoard);
  if (result !== null) return result;

  if (isMaximizing) {
    let best = -Infinity;

    for (let i=0;i<9;i++){
      if(newBoard[i]===""){
        newBoard[i]="X";
        best = Math.max(best, minimax(newBoard,false));
        newBoard[i]="";
      }
    }
    return best;
  }

  else {
    let best = Infinity;

    for (let i=0;i<9;i++){
      if(newBoard[i]===""){
        newBoard[i]="O";
        best = Math.min(best, minimax(newBoard,true));
        newBoard[i]="";
      }
    }
    return best;
  }
}


/* =========================
   EVALUATE BOARD
========================= */
function evaluate(b){

  for(let [a,b1,c] of winPatterns){
    if(b[a] && b[a]===b[b1] && b[a]===b[c]){
      if(b[a]==="X") return 10;
      if(b[a]==="O") return -10;
    }
  }

  if(!b.includes("")) return 0;

  return null;
}


/* =========================
   CHECK WIN
========================= */
function checkWinner() {

  for (let [a,b,c] of winPatterns) {
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

  if (winner === "X") {
    scoreX++;
    scoreXEl.innerText = scoreX;
  }

  if (winner === "O") {
    scoreO++;
    scoreOEl.innerText = scoreO;
  }

  msgContainer.classList.remove("hide");
  msg.innerText = winner === "Draw" ? "Match Draw" : `${winner} Wins!`;
}



/* =========================
   RESET
========================= */
resetBtn.addEventListener("click", resetBoard);
newGameBtn.addEventListener("click", resetBoard);
easyBtn.onclick = () => AI_SMARTNESS = 0.5;
mediumBtn.onclick = () => AI_SMARTNESS = 0.7;
hardBtn.onclick = () => AI_SMARTNESS = 0.9;


function resetBoard() {
  board = ["","","","","","","","",""];
  currentPlayer = "O";
  gameRunning = true;

  boxes.forEach(b=>{
    b.innerText="";
    b.classList.remove("X","O");
  });

  msgContainer.classList.add("hide");
}


