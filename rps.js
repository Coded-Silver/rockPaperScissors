const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const scoreText = document.querySelector("#scoreText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let playerScore = 0;
let computerScore = 0;
let result;
let score = 0;

choiceBtns.forEach(button => button.addEventListener('click', () => { 
    player = button.textContent;
    computerTurn();
    let winner = checkWinner();
    const win = "You win!";
    const lose = "You lose!";
    if (winner.indexOf(win) >= 0) {
        playerScore += 1;
    } else if (winner.indexOf(lose) >= 0) {
        computerScore += 1;
    }    
    playerText.textContent = `Player: ${playerScore}`;
    computerText.textContent = `Computer: ${computerScore}`;
    resultText.textContent = checkWinner();
    scoreText.textContent = `Score: ${playerScore} - ${computerScore}`;
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
        return "The computer chose " + computer + ". It's a tie!";
    } else if (computer == "ROCK") {
        return (player == "PAPER") ? "The computer chose ROCK! You win!" : "The computer chose ROCK! You lose!";
    } else if (computer == "PAPER") {
        return (player == "SCISSORS") ? "The computer chose PAPER! You win!" : "The computer chose PAPER! You lose!";
    } else if (computer == "SCISSORS") {
        return (player == "ROCK") ? "The computer chose SCISSORS! You win!" : "The computer chose SCISSORS! You lose!";
    }
}