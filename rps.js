const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const scoreText = document.querySelector("#scoreText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const newGameBtn = document.querySelector(".newGame");
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
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
    scoreText.textContent = `Score: ${playerScore} - ${computerScore}`;
    endGame();
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
        return "You both chose " + computer + ". It's a tie!";
    } else if (computer == "ROCK") {
        return (player == "PAPER") ? "Paper covers rock! You win!" : "Rock smashes scissors! You lose!";
    } else if (computer == "PAPER") {
        return (player == "SCISSORS") ? "Scissors cut paper! You win!" : "Paper covers rock! You lose!";
    } else if (computer == "SCISSORS") {
        return (player == "ROCK") ? "Rock smashes scissors! You win!" : "Scissors cut paper! You lose!";
    }
}

function endGame() {
    if (computerScore == 5 || playerScore == 5) {
        choiceBtns.forEach(button => button.classList.add('hide'));
        newGameBtn.classList.remove('hide');
        if (playerScore > computerScore) {
            playerText.textContent = "Player: Winner!"
            computerText.textContent = "Computer: Loser!"
            resultText.textContent = "You win! Congrats!"
        } else {
            playerText.textContent = "Player: Loser!"
            computerText.textContent = "Computer: Winner!"
            resultText.textContent = "Oh no, you lost! Better luck next time!"
        }
    }
}

newGameBtn.addEventListener('click', startNewGame)

function startNewGame() {
    playerScore = 0;
    computerScore = 0;
    playerText.textContent = "Player: "
    computerText.textContent = "Computer: "
    resultText.textContent = 'Make your first choice.';
    scoreText.textContent = 'Score: ';
    newGameBtn.classList.add('hide');
    choiceBtns.forEach(button => button.classList.remove('hide'));
}
