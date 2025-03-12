// The Odin Project - Rock, Paper, Scissors


// Set up the logic to get the Computer Choice
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

