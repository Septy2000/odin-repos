function computerPlay() {
    let choice = Math.floor(Math.random() * (4 - 1)) + 1;

    switch(choice) {
        case 1: choice = "rock";
                break;
        case 2: choice = "paper";
                break;
        case 3: choice = "scissors";
                break;
        default: choice = "error";
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) return "Draw";
    if (rules[playerSelection] === computerSelection) return "Win";
    return "Lose"
}

function game(numberOfGames) {
    for(let i = 1; i <= numberOfGames; i++) {
        let playerSelection = window.prompt("Choose between: rock, paper, scissors").toLowerCase();
        let computerSelection =  computerPlay();
        let endResult = playRound(playerSelection, computerSelection)
        console.log(`Round ${i}: Your choice: ${playerSelection} | Computer's choice: ${computerSelection}. ${endResult}!`)
    }
}
let rules = {"rock": "scissors", "paper": "rock", "scissors": "paper"};

let numberOfGames = parseInt(window.prompt("Please enter the number of games you want to play: "));
game(numberOfGames);
