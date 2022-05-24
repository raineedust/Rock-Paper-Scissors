// Define Choice and scores

let playerChoice;
let computerChoice;
let computerScore = 0;
let playerScore = 0;

// Computer randomly selects

const item = [
  { name: "Rock", value: 0 },
  { name: "Paper", value: 1 },
  { name: "Scissors", value: 2 },
];

function computerPlay() {
  computerChoice = item[Math.floor(Math.random() * item.length)];
  return computerChoice;
}

// Determine tie/win/loss, assign score

let turnResult = document.querySelector("#turnResult");
let roundResult = document.querySelector("#roundResult");

function playRound(playerChoice, computerChoice) {
  let roundWin = `${playerChoice}-${computerChoice.value}`;
  let playerWin = ["0-2", "1-0", "2-1"];

  if (Number(playerChoice) === computerChoice.value) {
    turnResult.textContent = "It's a tie!";
  } else if (playerWin.includes(roundWin)) {
    playerScoreMsg.textContent = ++playerScore;
    turnResult.textContent = `You win! ${playerItem} beats ${computerChoice.name}.`;
  } else {
    computerScoreMsg.textContent = ++computerScore;
    turnResult.textContent = `You lost! ${computerChoice.name} beats ${playerItem}.`;
  }
  checkWinner();
}

// Announce round result

const roundMsg = ["Boo, you lost to a computer!", "You won the match!"];

function checkWinner() {
  if (computerScore === 5 && computerScore > playerScore) {
    roundResult.textContent = roundMsg[0];
    restartGame();
  } else if (playerScore === 5 && computerScore < playerScore) {
    roundResult.textContent = roundMsg[1];
    restartGame();
  }
}

// Button UI

// querySelector by id

const choiceBtn = document.querySelectorAll("div.choiceBtn button");
choiceBtn.forEach((button) => {
  button.addEventListener("click", playerPlay);
});

function playerPlay(e) {
  let playerChoice = e.target.id;
  playerItem = e.target.textContent;
  playRound(playerChoice, computerPlay());
}

// Score UI

// querySelector by id

const playerScoreMsg = document.querySelector("#playerScore");
const computerScoreMsg = document.querySelector("#computerScore");

// Reset UI

const restartBtn = document.querySelector("#restartBtn");
restartBtn.addEventListener("click", () => location.reload());

function restartGame() {
  choiceBtn.forEach((button) => {
    button.removeEventListener("click", playerPlay);
  });
}
