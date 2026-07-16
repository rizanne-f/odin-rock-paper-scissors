function getComputerChoice() {
    const random = Math.ceil(3 * Math.random()) 
    if (random === 1) {
        return "rock"
    } else if (random === 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    return prompt("Choose between 'rock', 'paper', or 'scissors':").toLowerCase()
}

function playGame() {
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return console.log(`It's a tie! Both players chose ${humanChoice}`)
        } else if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                computerScore += 1
                console.log(`Human: ${humanScore}, Computer: ${computerScore}`)
                return console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            }
            humanScore += 1
            console.log(`Human: ${humanScore}, Computer: ${computerScore}`)
            return console.log(`You won! ${humanChoice} beats ${computerChoice}`)
        } else if (humanChoice === "paper") {
            if (computerChoice === "scissors") {
                computerScore += 1
                console.log(`Human: ${humanScore}, Computer: ${computerScore}`)
                return console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            }
            humanScore += 1
            console.log(`Human: ${humanScore}, Computer: ${computerScore}`)
            return console.log(`You won! ${humanChoice} beats ${computerChoice}`)
        } else if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                computerScore += 1
                console.log(`Human: ${humanScore}, Computer: ${computerScore}`)
                return console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            }
            humanScore += 1
            console.log(`Human: ${humanScore}, Computer: ${computerScore}`)
            return console.log(`You won! ${humanChoice} beats ${computerChoice}`)
        }
    }

    for (let i = 1; i <= 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())
    }

    if (humanScore > computerScore) {
        console.log("Game Over: Congratulations, You won!")
    } else if (computerScore > humanScore) {
        console.log("Game Over: Computer won!")
    } else {
        console.log("Game Over: It's a tie!")
    }
}

playGame()