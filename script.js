// The Odin Project - Rock, Paper, Scissors


// Set up the logic to get the Choice of computer player
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


// Set up the logic to get the Choice of human player
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


