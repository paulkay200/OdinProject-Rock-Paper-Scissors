// The Odin Project - Rock, Paper, Scissors


// Set up the function to get the Choice of computer player
// 1. Tell how computer player choose a choice between rock, paper, and scissors.

// 2. Use Math.floor and Math.random to generate a number between 1 to 3.  (1 to `rock`, 2 to `paper`, 3 to `scissors`)
function getComputerChoice() {
    const computer = Math.floor(Math.random() * 3) + 1;

    if (computer === 1) {
        return `rock`;
    } else if (computer === 2) {
        return `paper`;
    } else {
        return `scissors`;
    }  
}


// Set up the function to get the Choice of human player
// 1. Set up the popped up prompt to choose a choice between rock, paper, and scissors

// 2. If human player exits the game, the game will stop immediately no matter how many rounds they are playing.

// 3. Prompt will keep repeating over again and remind human player to re-enter their choice if they don't enter correct choices.

function getHumanChoice() {
    let player;

    player = prompt("Please enter your choice with the only following word: (rock, paper, scissors)");

    if (player === null) {
        alert("Player exits the game. Game over.");
        console.log("Player exits the game. Game over.")
        return null;
    }

    player = player.toLowerCase().trim();

    if (player === "rock" || player === "paper" || player === "scissors") {
        return player;
    } else {
        alert(`Invalid choice. Please re-enter rock, paper, or scissors.`);
    }

}


// Declare human player and computer player score variable
let humanScore = 0;
let computerScore = 0;


// Write a function to play a single round

// 1. Declare human player and computer player choices. Whoever wins 1 round, increment 1 point.

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
         return (`Player choice - [${humanChoice}]. Computer choice - [${computerChoice}].\n\nIt's a tie!`);     
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
      ) {
         humanScore++;
         return `Player choice - [${humanChoice}].\nComputer choice - [${computerChoice}].\n\nPlayer wins! ${humanChoice} beats ${computerChoice}.`;
    } else {
         computerScore++;
         return `Player choice - [${humanChoice}].\nComputer choice - [${computerChoice}].\n\nPlayer loses! ${computerChoice} beats ${humanChoice}.`;
    }
}


// Write a function for single round game

// 1. Both players start with single round game.
// 2. If human player exits the game, the whole game will stop immediately, not only single round of the game.
// 3. If human player participles single round of the game, the rest of 4 rounds of the game will continue.

function playGame(roundNumber) {

    console.group();
    console.log(`round: ${roundNumber};`)
    const human = getHumanChoice();

    if (human === null) {
        return false;
    }

    const computer = getHumanChoice();

    const roundResult = playRound(human, computer);
    alert(roundResult);
    console.log(roundResult);

    alert(`Round ${roundNumber} result - Player score: ${humanScore}. Computer score: ${computerScore}.`);
    console.log(`Round ${roundNumber} result - Player score: ${humanScore}. Computer score: ${computerScore}.`);

    console.groupEnd();

    return true;
}



