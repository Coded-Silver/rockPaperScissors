function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3)
    return compChoice === 0 ? 'Rock' :
           compChoice === 1 ? 'Paper' :
           'Scissors'
    }

    console.log(getComputerChoice())