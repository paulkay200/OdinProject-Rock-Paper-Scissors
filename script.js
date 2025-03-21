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


// Set up the function to get the Choice of player
// 1. Set up the popped up prompt to choose a choice between rock, paper, and scissors

// 2. If player exits the game, the game will stop immediately no matter how many rounds of game they are playing.

// 3. Player's prompt will keep repeating over again and remind player to re-enter their choice if they don't enter correct choices.

function getPlayerChoice() {
    let player;

    while(true) {
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
}


// Declare player and computer score variable
let playerScore = 0;
let computerScore = 0;


// Write a function to play a single round of play

// 1. Declare player and computer rock, paper, scissors choices.

// 2. When player or computer wins, increment 1 point.

function playRound(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
         return (`Player choice - [${playerChoice}]. Computer choice - [${playerChoice}].\n\nIt's a tie!`);     
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
      ) {
         playerScore++;
         return `Player choice - [${playerChoice}].\nComputer choice - [${playerChoice}].\n\nPlayer wins! ${playerChoice} beats ${computerChoice}.`;
    } else {
         computerScore++;
         return `Player choice - [${playerChoice}].\nComputer choice - [${playerChoice}].\n\nPlayer loses! ${computerChoice} beats ${playerChoice}.`;
    }
}


// Write a function for single round game

// 1. Both players start with single round of play.

// 2. Both player will print out the result of single round of play once they select their choice.

function playGame(roundNumber) {

    console.group();
    console.log(`round: ${roundNumber};`);

    const player = getPlayerChoice();

    if (player === null) {
        return false;
    }

    const computer = getComputerChoice();

    const roundResult = playRound(player, computer);
    alert(roundResult);
    console.log(roundResult);

    alert(`Round ${roundNumber} result - Player score: ${playerScore}. Computer score: ${computerScore}.`);
    console.log(`Round ${roundNumber} result - Player score: ${playerScore}. Computer score: ${computerScore}.`);

    console.groupEnd();

    return true;
}

// Write a function to play the entire game

// 1. If player exits the game, the whole game will stop immediately, not only single round of the game.

// 2. If player participles single round of the game, the rest of 4 rounds of the game will continue until 5 rounds.

// 3. After 5 rounds of play, the final score and the winner will be displayed.

function startGame() {
  
    let gameContinues = true;
  
    gameContinues = gameContinues && playGame(1);
    if (!gameContinues) {
      return false;
    }
  
    gameContinues = gameContinues && playGame(2);
    if (!gameContinues) {
      return false;
    }
  
    gameContinues = gameContinues && playGame(3);
    if (!gameContinues) {
      return false;
    }
  
    gameContinues = gameContinues && playGame(4);
    if (!gameContinues) {
      return false;
    }
  
    gameContinues = gameContinues && playGame(5); 
    if (!gameContinues) {
      return false;
    }
  
    alert(`Final result - Player score: ${playerScore}. Computer score: ${computerScore}.`)

    if (playerScore === computerScore) {
        alert(`The whole game is a tie! Ready for re-match?`);
      } else if (playerScore > computerScore) {
        alert(`Player wins the game.`);
        console.log(`Player wins the game.`);
      } else {
        alert(`Player loses the game.`);
        console.log(`Player loses the game.`);
      }
}
  
startGame();



