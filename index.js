function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);

    if (randomIndex === 0) {
        return "rock";
    }   else if (randomIndex === 1) {
        return "paper";
    }   else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper or Scissors?");
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, getComputerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === getComputerChoice) {
        console.log("It's a tie!");
    }   else if (
        (humanChoice === "rock" && getComputerChoice === "scissors") ||
        (humanChoice === "scissors" && getComputerChoice === "paper") ||
        (humanChoice === "paper" && getComputerChoice === "rock")
    ) { console.log("You win! " + humanChoice + " beats " + getComputerChoice);
        humanScore++;
    } else {
        console.log("You lose! " + getComputerChoice + " beats " + humanChoice);
        computerScore++;
    }
    console.log(`Score: Human - ${humanScore}, Computer - ${computerScore}`);
}  

/* const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection); */

function playGame() {
    humanScore = 0;
    computerScore = 0;

    console.log("Round 1:");
    const humanSelection1 = getHumanChoice();
    const computerSelection1 = getComputerChoice();
    playRound(humanSelection1, computerSelection1);

    console.log("Round 2:");
    const humanSelection2 = getHumanChoice();
    const computerSelection2 = getComputerChoice();
    playRound(humanSelection2, computerSelection2);

    console.log("Round 3:");
    const humanSelection3 = getHumanChoice();
    const computerSelection3 = getComputerChoice();
    playRound(humanSelection3, computerSelection3);

    console.log("Round 4:");
    const humanSelection4 = getHumanChoice();
    const computerSelection4 = getComputerChoice();
    playRound(humanSelection4, computerSelection4);

    console.log("Round 5:");
    const humanSelection5 = getHumanChoice();
    const computerSelection5 = getComputerChoice();
    playRound(humanSelection5, computerSelection5);

    if (humanScore > computerScore) {
        console.log("Congratulations! You are the winner!");
    }   else if (computerScore > humanScore) {
        console.log("The computer wins! You lost!");
    }    else {
        console.log("It's a tie! Try again");
        }
    }

    playGame();