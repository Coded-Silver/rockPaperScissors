function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3)
    return compChoice === 0 ? 'rock' :
           compChoice === 1 ? 'paper' :
           'scissors'
    }

let playerChoice = prompt("Rock, paper, or scissors?");

function playRound (playerChoice) {
    let computerChoice = getComputerChoice()
    console.log(computerChoice)

    return playerChoice.toLowerCase() === computerChoice ?
            "It's a tie!" :
            playerChoice.toLowerCase() === 'rock' && computerChoice === 'paper' ?
            "You lose!" :
            playerChoice.toLowerCase() === 'rock' && computerChoice === 'scissors' ?
            "You win!" :
            playerChoice.toLowerCase() === 'paper' && computerChoice === 'rock' ?
            "You win!" :
            playerChoice.toLowerCase() === 'paper' && computerChoice === 'scissors' ?
            "You lose!" :
            playerChoice.toLowerCase() === 'scissors' && computerChoice === 'rock' ?
            "You lose!" :
            playerChoice.toLowerCase() === 'scissors' && computerChoice === 'paper' ?
            "You win!" :
            "error"
    }


console.log(playRound(playerChoice))
