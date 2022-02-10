// Computer randomly select r/p/s

function computerPlay() {
    let item = ["rock", "paper", "scissors"];
    let choice = item[Math.floor(Math.random() * item.length)];
    return choice;
}

// Prompt for player choice and initiate first round

let playerSelection;
let computerSelection;

function playRound (playerSelection, computerSelection) {
    playerSelection=prompt("Rock, Paper, or Scissors?").toLowerCase();
    computerSelection=computerPlay();
    console.log(`You chose ${playerSelection}.`)
    console.log(`The computer chose ${computerSelection}.`)

    if (playerSelection===computerSelection) {
        let result = ("It's a tie!");
        return result;
    } 
    
    else if
        ((playerSelection==="rock" && computerSelection==="scissors") ||
        (playerSelection==="paper" && computerSelection==="rock") ||
        (playerSelection==="scissors" && computerSelection==="paper")) {
            playerScore++;
            let result = "You won the round!";
            return result;
    } 
    
    else if
        ((playerSelection==="rock" && computerSelection==="paper") ||
        (playerSelection==="paper" && computerSelection==="scissors") ||
        (playerSelection==="scissors" && computerSelection==="rock")) {
            computerScore++;
            let result = "You lost the round.";
            return result;
        }
        
        else {
        let result = "Invalid choice. Please choose between Rock, Paper, or Scissors.";
        return result;
    }
}

// Play for five rounds

