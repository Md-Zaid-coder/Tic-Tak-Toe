// let boxes = document.querySelector(".box");
// let resetBtn = document.querySelector("#reset-btn");
// let newGameBtn = document.querySelector("#new-btn");
// let msgContainer = document.querySelector(".msg-container");
// let msg = document.querySelector("#msg");

// let turnO = true;

// const winPatterns = [
//     [0,1,2],
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],
//     [2,5,8],
//     [2,4,6],
//     [3,4,5],
//     [6,7,8],
// ];

// const resetGame = () => {
//     turnO = true;
//     enableBoxes();
//     msg.container.classList.add("hide");
// };

// boxes.forEach((box) => {  //box per click krne pe kuc ho uske liye
//     box.addEventListener("click", () => { //click pe response dene k liye
//         if(turnO){
//             //player O turn pe o ayega
//          box.innerText = "O"; 
//          turnO = false;
//         } else { //player x k turn
//             box.innerText = "X";
//             turnO = true;
//         }
//         box.disabled = true; //ek barr x ane k bad fir click pe o ya x na aye toh disabled button ek text fix hota hai 

//         checkWinner(); //winner k liye check agar winning set ara hai toh
//     });
//     });

// const disabledBoxes = () => {
//     for(let box of boxes){
//         box.disabled = true;
//     }
// };

// const enableBoxes = () => {
//     for(let box of boxes){
//         box.disabled = false;
//         box.innerText = "";
//     }
// };

// const showWinner = (winner) => {
//     msg.innerText = `congratulation, you are Winner ${winner}`;
//     msgContainer.classList.remove("hide");
//     disabledBoxes();
// };

// const checkWinner = () => {
//     for(let pattern of winPatterns) {
//     let pos1Val = boxes[pattern[0]].innerText;
//     let pos2Val = boxes[pattern[1]].innerText;
//     let pos3Val = boxes[pattern[2]].innerText;

//     if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
//         if(pos1Val === pos2Val && pos2Val === pos3Val){
//             showWinner(pos1Val);
//             return true;
//         }
//     }
// }
// };

// newGameBtn.addEventListener("click", resetGame);
// resetBtn.addEventListener("click", resetGame);

// ====== Tic Tac Toe — Modern JS ======

// DOM elements
// const boxes = Array.from(document.querySelectorAll(".box"));
// const resetBtn = document.querySelector("#reset-btn");
// const newBtn = document.querySelector("#new-btn");
// const msgContainer = document.querySelector("#msg-container");
// const popupPlayAgain = document.querySelector("#new-game-popup");
// const popupClose = document.querySelector("#close-popup");
// const msgText = document.querySelector("#msg");

// // scoreboard elements
// const scoreO = document.querySelector("#score-o");
// const scoreX = document.querySelector("#score-x");
// const scoreD = document.querySelector("#score-d");

// // game state
// let board = Array(9).fill(null); // null means empty, 'O' or 'X' otherwise
// let current = "O"; // start with O as requested
// let running = true;

// // stats
// let stats = { O: 0, X: 0, D: 0 };

// // winning patterns (array of index triples)
// const winPatterns = [
//   [0,1,2],[3,4,5],[6,7,8], // rows
//   [0,3,6],[1,4,7],[2,5,8], // cols
//   [0,4,8],[2,4,6]          // diagonals
// ];

// // ---------------- helper functions ----------------
// function render() {
//   // update DOM from board
//   boxes.forEach((btn, idx) => {
//     btn.textContent = board[idx] ? board[idx] : "";
//     btn.disabled = !running || !!board[idx]; // disable if game not running or already filled
//     btn.classList.toggle("win", false); // clear any win highlight
//   });
// }

// function setMessage(text) {
//   msgText.textContent = text;
//   msgContainer.classList.remove("hide");
// }

// function hideMessage() {
//   msgContainer.classList.add("hide");
// }

// // check for a winner or draw
// function checkWinner() {
//   for (const pattern of winPatterns) {
//     const [a,b,c] = pattern;
//     if (board[a] && board[a] === board[b] && board[b] === board[c]) {
//       return { winner: board[a], pattern };
//     }
//   }
//   if (board.every(cell => cell !== null)) {
//     return { winner: null }; // draw
//   }
//   return null; // game continues
// }

// function highlightPattern(pattern) {
//   pattern.forEach(i => boxes[i].classList.add("win"));
// }

// // reset board but keep scores if keepStats true
// function resetBoard(keepStats = true) {
//   board = Array(9).fill(null);
//   current = "O";
//   running = true;
//   hideMessage();
//   render();
//   if (!keepStats) {
//     stats = { O: 0, X: 0, D: 0 };
//     updateScoreboard();
//   }
// }

// function updateScoreboard() {
//   scoreO.textContent = stats.O;
//   scoreX.textContent = stats.X;
//   scoreD.textContent = stats.D;
// }

// // handle a move at index
// function makeMove(index) {
//   if (!running || board[index]) return;
//   board[index] = current;
//   const result = checkWinner();
//   if (result && result.winner !== undefined) {
//     // winner or draw
//     running = false;
//     if (result.winner) {
//       // someone won
//       highlightPattern(result.pattern);
//       setMessage(`🎉 Winner: ${result.winner}`);
//       stats[result.winner] += 1;
//     } else {
//       // draw
//       setMessage(`It's a draw!`);
//       stats.D += 1;
//     }
//     updateScoreboard();
//   } else {
//     // continue game
//     current = current === "O" ? "X" : "O";
//   }
//   render();
// }

// ---------------- event listeners ----------------
// boxes.forEach((btn, idx) => {
//   btn.addEventListener("click", () => makeMove(idx));
//   // keyboard accessibility (Enter/Space)
//   btn.addEventListener("keydown", (e) => {
//     if (e.key === "Enter" || e.key === " ") {
//       e.preventDefault();
//       makeMove(idx);
//     }
//   });
// });

// resetBtn.addEventListener("click", () => resetBoard(true)); // reset board, keep score
// newBtn.addEventListener("click", () => { resetBoard(false); }); // new game clear scores

// // popup buttons
// popupPlayAgain.addEventListener("click", () => resetBoard(true));
// popupClose.addEventListener("click", () => hideMessage());

// // initialize
// resetBoard(true);
// updateScoreboard();
// render();



// ================== Upgraded script.js (Neon popup + Modern Ping Sound) ==================

// ================== Upgraded script.js (Neon popup + Modern Ping Sound) ==================

// DOM
// Neon Hacker Tic Tac Toe - script.js

// DOM
// const boxes = Array.from(document.querySelectorAll(".box"));
// const resetBtn = document.querySelector("#reset-btn");
// const newBtn = document.querySelector("#new-btn");
// const msgContainer = document.querySelector("#msg-container");
// const popupPlayAgain = document.querySelector("#new-game-popup");
// const popupClose = document.querySelector("#close-popup");
// const msgText = document.querySelector("#msg");

// const scoreO = document.querySelector("#score-o");
// const scoreX = document.querySelector("#score-x");
// const scoreD = document.querySelector("#score-d");

// // Game state
// let board = Array(9).fill(null);
// let current = "O"; // O starts
// let running = true;
// let stats = { O: 0, X: 0, D: 0 };

// // Winning patterns
// const winPatterns = [
//   [0,1,2],[3,4,5],[6,7,8],
//   [0,3,6],[1,4,7],[2,5,8],
//   [0,4,8],[2,4,6]
// ];


// // AUDIO - Web Audio API (modern ping)
// const audioCtx = (typeof AudioContext !== "undefined") ? new AudioContext() : null;

// function playPing(color = "neutral") {
//   if (!audioCtx) return;
//   const now = audioCtx.currentTime;
//   const master = audioCtx.createGain();
//   master.gain.value = 0.09;
//   master.connect(audioCtx.destination);

//   let f1 = 720, f2 = 920;
//   if (color === "green") { f1 = 760; f2 = 1040; }
//   else if (color === "red") { f1 = 420; f2 = 620; }
//   else if (color === "gold") { f1 = 520; f2 = 760; }

//   const o1 = audioCtx.createOscillator();
//   const g1 = audioCtx.createGain();
//   o1.type = "sine"; o1.frequency.value = f1;
//   g1.gain.value = 0;
//   o1.connect(g1); g1.connect(master);

//   const o2 = audioCtx.createOscillator();
//   const g2 = audioCtx.createGain();
//   o2.type = "triangle"; o2.frequency.value = f2;
//   g2.gain.value = 0;
//   o2.connect(g2); g2.connect(master);

//   const a = 0.006, d = 0.18;

//   g1.gain.cancelScheduledValues(now);
//   g1.gain.setValueAtTime(0, now);
//   g1.gain.linearRampToValueAtTime(0.16, now + a);
//   g1.gain.exponentialRampToValueAtTime(0.0001, now + d);

//   g2.gain.cancelScheduledValues(now);
//   g2.gain.setValueAtTime(0, now);
//   g2.gain.linearRampToValueAtTime(0.10, now + a + 0.01);
//   g2.gain.exponentialRampToValueAtTime(0.0001, now + d + 0.03);

//   o1.start(now);
//   o2.start(now + 0.003);
//   o1.stop(now + d + 0.05);
//   o2.stop(now + d + 0.09);

//   setTimeout(() => {
//     try { o1.disconnect(); o2.disconnect(); g1.disconnect(); g2.disconnect(); master.disconnect(); } catch(e){}
//   }, (d + 0.22) * 1000);
// }

// // UI helpers
// function render() {
//   boxes.forEach((btn, idx) => {
//     const val = board[idx];
//     btn.textContent = val ? val : "";
//     btn.disabled = !running || !!board[idx];
//     btn.dataset.value = val ? val : "";
//     btn.classList.remove("win");
//   });
// }

// function updateScoreboard() {
//   scoreO.textContent = stats.O;
//   scoreX.textContent = stats.X;
//   scoreD.textContent = stats.D;
// }

// function hideMessage() {
//   msgContainer.classList.add("hide");
//   msgContainer.classList.remove("pop","glow-green","glow-red","glow-gold");
//   const ring = msgContainer.querySelector(".glow-ring");
//   if (ring) ring.remove();
// }

// function showMessage(winner, pattern = null) {
//   if (winner === "O") msgText.textContent = `🎉 Player O Wins!`;
//   else if (winner === "X") msgText.textContent = `🎉 Player X Wins!`;
//   else msgText.textContent = `It's a draw!`;

//   // clear classes
//   msgContainer.classList.remove("hide","glow-green","glow-red","glow-gold","pop");
//   // attach proper glow class
//   if (winner === "O") msgContainer.classList.add("glow-green");
//   else if (winner === "X") msgContainer.classList.add("glow-red");
//   else msgContainer.classList.add("glow-gold");

//   // ensure a glow-ring exists
//   if (!msgContainer.querySelector(".glow-ring")) {
//     const ring = document.createElement("div");
//     ring.className = "glow-ring";
//     msgContainer.appendChild(ring);
//   }

//   // trigger pop animation
//   void msgContainer.offsetWidth;
//   msgContainer.classList.add("pop");

//   // highlight pattern if winner
//   if (Array.isArray(pattern)) highlightPattern(pattern);

//   // play sound
//   if (winner === "O") playPing("green");
//   else if (winner === "X") playPing("red");
//   else playPing("gold");
// }

// // game logic
// function checkWinner() {
//   for (const pattern of winPatterns) {
//     const [a,b,c] = pattern;
//     if (board[a] && board[a] === board[b] && board[b] === board[c]) {
//       return { winner: board[a], pattern };
//     }
//   }
//   if (board.every(cell => cell !== null)) return { winner: null };
//   return null;
// }

// function highlightPattern(pattern){
//   pattern.forEach(i => boxes[i].classList.add("win"));
// }

// function makeMove(index) {
//   if (!running || board[index]) return;
//   board[index] = current;
//   const result = checkWinner();
//   if (result && result.winner !== undefined) {
//     running = false;
//     if (result.winner) {
//       stats[result.winner] += 1;
//       updateScoreboard();
//       showMessage(result.winner, result.pattern);
//     } else {
//       stats.D += 1;
//       updateScoreboard();
//       showMessage(null);
//     }
//   } else {
//     current = current === "O" ? "X" : "O";
//   }
//   render();
// }

// function resetBoard(keepStats = true) {
//   board = Array(9).fill(null);
//   current = "O";
//   running = true;
//   hideMessage();
//   render();
//   if (!keepStats) {
//     stats = { O:0, X:0, D:0 };
//     updateScoreboard();
//   }
// }

// // EVENTS
// boxes.forEach((btn, idx) => {
//   btn.addEventListener("click", () => {
//     if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();
//     makeMove(idx);
//   });
//   btn.addEventListener("keydown", e => {
//     if (e.key === "Enter" || e.key === " ") {
//       e.preventDefault();
//       if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();
//       makeMove(idx);
//     }
//   });
// });

// resetBtn.addEventListener("click", () => resetBoard(true));
// newBtn.addEventListener("click", () => resetBoard(false));
// popupPlayAgain.addEventListener("click", () => resetBoard(true));
// popupClose.addEventListener("click", () => hideMessage());

// // INIT
// resetBoard(true);
// updateScoreboard();
// render();



const boxes = Array.from(document.querySelectorAll(".box"));
const resetBtn = document.querySelector("#reset-btn");
const newBtn = document.querySelector("#new-btn");
const msgContainer = document.querySelector("#msg-container");
const popupPlayAgain = document.querySelector("#new-game-popup");
const popupClose = document.querySelector("#close-popup");
const msgText = document.querySelector("#msg");

const scoreO = document.querySelector("#score-o");
const scoreX = document.querySelector("#score-x");
const scoreD = document.querySelector("#score-d");

let board = Array(9).fill(null);
let current = "O"; // O always starts
let running = true;
let stats = { O: 0, X: 0, D: 0 };

// 🧠 AI FEATURE — mode toggle
let isAI = true; // set true for AI vs Player, false for 2 Players

const winPatterns = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

// AUDIO
const audioCtx = (typeof AudioContext !== "undefined") ? new AudioContext() : null;
function playPing(color = "neutral") {
  if (!audioCtx) return;
  const now = audioCtx.currentTime;
  const master = audioCtx.createGain();
  master.gain.value = 0.09;
  master.connect(audioCtx.destination);
  let f1 = 720, f2 = 920;
  if (color === "green") { f1 = 760; f2 = 1040; }
  else if (color === "red") { f1 = 420; f2 = 620; }
  else if (color === "gold") { f1 = 520; f2 = 760; }

  const o1 = audioCtx.createOscillator();
  const g1 = audioCtx.createGain();
  o1.type = "sine"; o1.frequency.value = f1;
  g1.gain.value = 0;
  o1.connect(g1); g1.connect(master);
  const o2 = audioCtx.createOscillator();
  const g2 = audioCtx.createGain();
  o2.type = "triangle"; o2.frequency.value = f2;
  g2.gain.value = 0;
  o2.connect(g2); g2.connect(master);
  const a = 0.006, d = 0.18;
  g1.gain.cancelScheduledValues(now);
  g1.gain.setValueAtTime(0, now);
  g1.gain.linearRampToValueAtTime(0.16, now + a);
  g1.gain.exponentialRampToValueAtTime(0.0001, now + d);
  g2.gain.cancelScheduledValues(now);
  g2.gain.setValueAtTime(0, now);
  g2.gain.linearRampToValueAtTime(0.10, now + a + 0.01);
  g2.gain.exponentialRampToValueAtTime(0.0001, now + d + 0.03);
  o1.start(now); o2.start(now + 0.003);
  o1.stop(now + d + 0.05); o2.stop(now + d + 0.09);
  setTimeout(() => { try { o1.disconnect(); o2.disconnect(); g1.disconnect(); g2.disconnect(); master.disconnect(); } catch(e){} }, (d + 0.22) * 1000);
}

// UI
function render() {
  boxes.forEach((btn, idx) => {
    const val = board[idx];
    btn.textContent = val ? val : "";
    btn.disabled = !running || !!board[idx];
    btn.dataset.value = val ? val : "";
    btn.classList.remove("win");
  });
}

function updateScoreboard() {
  scoreO.textContent = stats.O;
  scoreX.textContent = stats.X;
  scoreD.textContent = stats.D;
}

function hideMessage() {
  msgContainer.classList.add("hide");
  msgContainer.classList.remove("pop","glow-green","glow-red","glow-gold");
  const ring = msgContainer.querySelector(".glow-ring");
  if (ring) ring.remove();
}

function showMessage(winner, pattern = null) {
  if (winner === "O") msgText.textContent = `🎉 Player O Wins!`;
  else if (winner === "X" && isAI) msgText.textContent = `🤖 AI Wins!`;
  else if (winner === "X") msgText.textContent = `🎉 Player X Wins!`;
  else msgText.textContent = `It's a draw!`;

  msgContainer.classList.remove("hide","glow-green","glow-red","glow-gold","pop");
  if (winner === "O") msgContainer.classList.add("glow-green");
  else if (winner === "X") msgContainer.classList.add("glow-red");
  else msgContainer.classList.add("glow-gold");

  if (!msgContainer.querySelector(".glow-ring")) {
    const ring = document.createElement("div");
    ring.className = "glow-ring";
    msgContainer.appendChild(ring);
  }
  void msgContainer.offsetWidth;
  msgContainer.classList.add("pop");

  if (Array.isArray(pattern)) highlightPattern(pattern);

  if (winner === "O") playPing("green");
  else if (winner === "X") playPing("red");
  else playPing("gold");
}

// Logic
function checkWinner() {
  for (const pattern of winPatterns) {
    const [a,b,c] = pattern;
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      return { winner: board[a], pattern };
    }
  }
  if (board.every(cell => cell !== null)) return { winner: null };
  return null;
}

function highlightPattern(pattern){ pattern.forEach(i => boxes[i].classList.add("win")); }

function makeMove(index) {
  if (!running || board[index]) return;
  board[index] = current;
  const result = checkWinner();
  if (result && result.winner !== undefined) {
    running = false;
    if (result.winner) {
      stats[result.winner] += 1;
      updateScoreboard();
      showMessage(result.winner, result.pattern);
    } else {
      stats.D += 1;
      updateScoreboard();
      showMessage(null);
    }
  } else {
    current = current === "O" ? "X" : "O";
    render();
    // 🧠 AI FEATURE: Trigger AI move if enabled
    if (isAI && current === "X" && running) {
      setTimeout(aiMove, 500);
    }
  }
}

// 🧠 AI FEATURE: Simple smart AI (blocks & wins)
function aiMove() {
  const empty = board.map((v,i)=>v?null:i).filter(v=>v!==null);
  if (!empty.length) return;

  // try to win
  for (const pattern of winPatterns) {
    const [a,b,c] = pattern;
    const line = [board[a],board[b],board[c]];
    if (line.filter(v=>v==="X").length===2 && line.includes(null)) {
      makeMove(pattern[line.indexOf(null)]);
      return;
    }
  }
  // block O
  for (const pattern of winPatterns) {
    const [a,b,c] = pattern;
    const line = [board[a],board[b],board[c]];
    if (line.filter(v=>v==="O").length===2 && line.includes(null)) {
      makeMove(pattern[line.indexOf(null)]);
      return;
    }
  }
  // else random
  const choice = empty[Math.floor(Math.random()*empty.length)];
  makeMove(choice);
}

function resetBoard(keepStats = true) {
  board = Array(9).fill(null);
  current = "O";
  running = true;
  hideMessage();
  render();
  if (!keepStats) {
    stats = { O:0, X:0, D:0 };
    updateScoreboard();
  }
}

// EVENTS
boxes.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    if (audioCtx && audioCtx.state === "suspended") audioCtx.resume();
    makeMove(idx);
  });
});
resetBtn.addEventListener("click", () => resetBoard(true));
newBtn.addEventListener("click", () => resetBoard(false));
popupPlayAgain.addEventListener("click", () => resetBoard(true));
popupClose.addEventListener("click", () => hideMessage());

// 🧠 AI FEATURE: toggle button (optional)
// you can add a small toggle button in HTML to switch mode manually
document.addEventListener("keydown", e=>{
  if(e.key==="m"){ // press 'm' to switch mode
    isAI=!isAI;
    alert(`Mode changed: ${isAI? "Player vs AI 🤖":"2 Player 👥"}`);
    resetBoard(true);
  }
});

resetBoard(true);
updateScoreboard();
render();

