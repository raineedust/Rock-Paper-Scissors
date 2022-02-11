//Define item array
const item = ["rock", "paper", "scissors"];

// Computer randomly select r/p/s from item array

function computerPlay() {
    let choice = item[Math.floor(Math.random() * item.length)];
    return choice;
}

// Prompt for player choice, determine win/loss/invalid choice, output result

let playerSelection;
let computerSelection;
let i;

function playRound (playerSelection, computerSelection) {
    playerSelection=prompt("Rock, Paper, or Scissors?").toLowerCase();
    computerSelection=computerPlay();

    if (playerSelection===computerSelection) {
        let result = ("It's a tie round at " + playerScore + "-" + computerScore + "!");
        console.log(result)
        return result;
    } 
    
    else if
        ((playerSelection==="rock" && computerSelection==="scissors") ||
        (playerSelection==="paper" && computerSelection==="rock") ||
        (playerSelection==="scissors" && computerSelection==="paper")) {
            playerScore++;
            let result = ("You won the round at " + playerScore + "-" + computerScore + "! " + playerSelection + " beats " + computerSelection + ".");
            console.log(result)
            return result;
    } 
    
    else if
        ((playerSelection==="rock" && computerSelection==="paper") ||
        (playerSelection==="paper" && computerSelection==="scissors") ||
        (playerSelection==="scissors" && computerSelection==="rock")) {
            computerScore++;
            let result = ("You lost the round at " + playerScore + "-" + computerScore + ". " + computerSelection + " beats " + playerSelection + ".");
            console.log(result)
            return result;
        }
        
    else if (playerSelection != "rock" || "paper" || "scissors") {
        let result = "Invalid choice. Please choose between Rock, Paper, or Scissors.";
        console.log(result)
        return result;
    }
}

// Define scores, loop for 5 rounds

let computerScore = 0
let playerScore = 0

game(playerSelection);

function game(playerSelection) {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection);
    }
    // Output final result
    if (playerScore >=3) {
        finalResult();
    }

    else if (computerScore >= 3) {
        finalResult();
    }

    else if (i = 5) {
    finalResult();
    }
}

// Final result

function finalResult() {
    if (playerScore > computerScore) {
        console.log("Congrats, you've won the match!")
    }

    else if (playerScore < computerScore) {
        console.log("You lost the match. Better luck next time!")
    }
}