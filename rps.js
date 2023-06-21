function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3)
    return compChoice === 0 ? 'rock' :
           compChoice === 1 ? 'paper' :
           'scissors'
    }

// let playerChoice = prompt("Rock, paper, or scissors?")
// let playerScore = 0
// let computerScore = 0
// let winner = ''

function playGame (playerChoice) {
    // let playerChoice = prompt("Rock, paper, or scissors?")
    let playerScore = 0
    let computerScore = 0
    let winner = ''
    let computerChoice = getComputerChoice()

    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Rock, paper, or scissors?")

        switch(playerChoice) {
            case playerChoice === computerChoice:
                console.log("It's a tie!");
                break;
            case playerChoice.toLowerCase() === 'rock' && computerChoice === 'paper':
                console.log("You lose!");
                computerScore += 1;
                break;
            case playerChoice.toLowerCase() === 'rock' && computerChoice === 'scissors':
                console.log("You win!");
                playerScore += 1;
                break;
        }
    }
    if (playerScore > computerScore) {
        console.log("You won! Congrats!")
    } else {
        console.log("Oh no! You lost!")
    }
}

playGame()

// function playRound (playerChoice) {
//     let computerChoice = getComputerChoice()
//     console.log(computerChoice)

//     return playerChoice.toLowerCase() === computerChoice ?
//             "It's a tie!" :
//             playerChoice.toLowerCase() === 'rock' && computerChoice === 'paper' ?
//             "You lose!" :
//             playerChoice.toLowerCase() === 'rock' && computerChoice === 'scissors' ?
//             "You win!" :
//             playerChoice.toLowerCase() === 'paper' && computerChoice === 'rock' ?
//             "You win!" :
//             playerChoice.toLowerCase() === 'paper' && computerChoice === 'scissors' ?
//             "You lose!" :
//             playerChoice.toLowerCase() === 'scissors' && computerChoice === 'rock' ?
//             "You lose!" :
//             playerChoice.toLowerCase() === 'scissors' && computerChoice === 'paper' ?
//             "You win!" :
//             "error"
//     }



// console.log(playRound(playerChoice))
