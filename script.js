// The Odin Project - Rock, Paper, Scissors


// Set up the function to get the Choice of computer
// 1. Tell how computer choose a choice between rock, paper, and scissors.

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


// Declare player and computer score variable
let playerScore = 0;
let computerScore = 0;


// Write a function to play a single round of play

// 1. Declare player and computer rock, paper, scissors choices.

// 2. When player or computer wins, increment 1 point.

function playRound(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
         return (`Player choice - [${playerChoice}]. Computer choice - [${computerChoice}].\n\nIt's a tie!`);     
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
      ) {
         playerScore++;
         return `Player choice - [${playerChoice}].\nComputer choice - [${computerChoice}].\n\nPlayer wins! ${playerChoice} beats ${computerChoice}.`;
    } else {
         computerScore++;
         return `Player choice - [${playerChoice}].\nComputer choice - [${computerChoice}].\n\nPlayer loses! ${computerChoice} beats ${playerChoice}.`;
    }
}


// Set up the function to get the Choice of player and computer, current round's game result, final round's game result

// 1. Both players start with single round of play.

// 2. Both player will print out the result of single round of play once they select their choice.

// 3. The message of final round's game result will be showed when it's game over.

let currentRound = 1;
let totalRounds = 5;

let currentRoundResult = document.querySelector(".current-round-result");
let finalGameResult = document.querySelector(".final-game-result");

function handleHumanChoice(playerChoice) {

  console.group();

  const roundResult = playRound(playerChoice, getComputerChoice());

  gameMessage.textContent = `${roundResult}`;
  console.log(roundResult);
    
  currentRoundResult.textContent = (`Round ${currentRound} result - Player score: ${playerScore}. Computer score: ${computerScore}.`);
  console.log(`Round ${currentRound} result - Player score: ${playerScore}. Computer score: ${computerScore}.`);

  currentRound++;

  console.groupEnd();

  if (currentRound > totalRounds) {
    if (playerScore === computerScore) {  
      finalGameResult.textContent = (`Game over. The whole game is a tie! Ready for re-match?`);
      console.log(`Game over. The whole game is a tie! Ready for re-match?`)
      } else if (playerScore > computerScore) {  
      finalGameResult.textContent = (`Game over. Player wins the game.`);
      console.log(`Game over. Player wins the game.`);
      } else {
      finalGameResult.textContent = (`Game over. Player loses the game.`); 
      console.log(`Game over. Player loses the game.`);
    } 
  }
}

let gameMessage = document.querySelector(".game-message");

