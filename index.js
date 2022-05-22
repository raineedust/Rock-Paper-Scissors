// Define selection and scores

let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;

// Computer randomly select r/p/s from item array

const item = ["rock", "paper", "scissors"];

function computerPlay() {
  let choice = item[Math.floor(Math.random() * item.length)];
  return choice;
}

// Determine win/loss/invalid, assign score
// Output round result

function playRound(playerSelection, computerSelection) {
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

// // Loop for 5 rounds
// // Once reach score threshold, skip loop and output final result

// game(playerSelection);

// function game() {
//   for (let i = 0; i < 5; i++) {
//     playRound();
//     // Output final result
//     if (playerScore === 3) {
//       finalResult();
//       return i;
//     } else if (computerScore === 3) {
//       finalResult();
//       return i;
//     } else if (i === 4) {
//       finalResult();
//     }
//   }
// }

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

// Button UI

const choiceBtn = document.querySelectorAll("div.choiceBtn button");
choiceBtn.forEach((button) => {
  button.addEventListener("click", getPlayerChoice);
});

function getPlayerChoice(e) {
  let playerSelection = e.target.id;
  console.log(playerSelection);
  playRound(playerSelection, computerPlay());
}
