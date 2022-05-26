// Define choice and scores

let playerChoice;
let computerChoice;
let computerScore = 0;
let playerScore = 0;
let turnVal = 0;

// Computer randomly selects

const item = [
  { item: "Rock", value: 0 },
  { item: "Paper", value: 1 },
  { item: "Scissors", value: 2 },
];

function computerPlay() {
  computerChoice = item[Math.floor(Math.random() * item.length)];
  return computerChoice;
}

// Determine tie/win/loss, assign score

function playRound(playerChoice, computerChoice) {
  let roundWin = `${playerChoice}-${computerChoice.value}`;
  let playerWin = ["0-2", "1-0", "2-1"];

  if (Number(playerChoice) === computerChoice.value) {
    ++turnVal;
    // The following message is displaying the turn, not round, but it sounds nicer.
    resultMsg.textContent = `Results: Round ${turnVal}`;
    turnResult.textContent = `> It's a tie!`;
  } else if (playerWin.includes(roundWin)) {
    ++turnVal;
    resultMsg.textContent = `Results: Round ${turnVal}`;
    playerScoreMsg.textContent = ++playerScore;
    turnResult.textContent = `> You win! ${playerItem} beats ${computerChoice.item}.`;
  } else {
    ++turnVal;
    resultMsg.textContent = `Results: Round ${turnVal}`;
    computerScoreMsg.textContent = ++computerScore;
    turnResult.textContent = `> You lost! ${computerChoice.item} beats ${playerItem}.`;
  }
  checkWinner();
}

// Announce round result

const roundMsg = [
  ">> Boo, you lost! 😓 Better luck next time!",
  ">> Congrats, 🎉 you won the match!",
];

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

const choiceBtn = document.querySelectorAll("div.choiceBtn button");
choiceBtn.forEach((button) => {
  button.addEventListener("click", playerPlay);
});

function playerPlay(e) {
  let playerChoice = e.target.id;
  playerItem = e.target.title;
  playRound(playerChoice, computerPlay());
}

// Result and Score UI

let turnResult = document.querySelector("#turnResult");
let roundResult = document.querySelector("#roundResult");

const resultMsg = document.querySelector("#resultLabel");
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
