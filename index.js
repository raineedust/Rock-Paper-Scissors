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

/* LEGACY SCRIPT

// Define item array

const item = ["rock", "paper", "scissors"];

// Computer randomly select r/p/s from item array

function computerPlay() {
  let choice = item[Math.floor(Math.random() * item.length)];
  return choice;
}

// Define selection and scores

let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;

// Prompt for player selection
// Determine win/loss/invalid, assign score
// Output round result

function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
  computerSelection = computerPlay();

  if (playerSelection === computerSelection) {
    let result =
      "It's a tie round at " + playerScore + "-" + computerScore + "!";
    console.log(result);
    return result;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    let result =
      "You won the round at " +
      playerScore +
      "-" +
      computerScore +
      "! " +
      playerSelection +
      " beats " +
      computerSelection +
      ".";
    console.log(result);
    return result;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerScore++;
    let result =
      "You lost the round at " +
      playerScore +
      "-" +
      computerScore +
      ". " +
      computerSelection +
      " beats " +
      playerSelection +
      ".";
    console.log(result);
    return result;
  } else if (playerSelection != "rock" || "paper" || "scissors") {
    let result =
      "Invalid choice. Please choose between Rock, Paper, or Scissors.";
    console.log(result);
    return result;
  }
}

// Loop for 5 rounds
// Once reach score threshold, skip loop and output final result

game(playerSelection);

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
    // Output final result
    if (playerScore === 3) {
      finalResult();
      return i;
    } else if (computerScore === 3) {
      finalResult();
      return i;
    } else if (i === 4) {
      finalResult();
    }
  }
}

// Final result

function finalResult() {
  if (playerScore > computerScore) {
    console.log("Congrats, 🎉 you've won the match!");
  } else if (playerScore < computerScore) {
    console.log("You've lost the match. 😓 Better luck next time!");
  } else {
    console.log("It's a tie, 🪢 what coincidence!");
  }
}

*/
