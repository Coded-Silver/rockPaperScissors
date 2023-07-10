const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let playerScore = 0;
let computerScore = 0;
let result;
let score = 0;

choiceBtns.forEach(button => button.addEventListener('click', () => { 
    player = button.textContent;
    computerTurn();
    if (checkWinner() == "You win!") {
        playerScore += 1;
    } else if (checkWinner() == "You lose!") {
        computerScore += 1;
    }    
    playerText.textContent = `Player: ${playerScore}`;
    computerText.textContent = `Computer: ${computerScore}`;
    resultText.textContent = checkWinner();
}));

function computerTurn() {
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum) {
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}

function checkWinner() {
    if(player == computer) {
        return "It's a tie!";
    } else if (computer == "ROCK") {
        return (player == "PAPER") ? "You win!" : "You lose!";
    } else if (computer == "PAPER") {
        return (player == "SCISSORS") ? "You win!" : "You lose!";
    } else if (computer == "SCISSORS") {
        return (player == "ROCK") ? "You win!" : "You lose!";
    }
}