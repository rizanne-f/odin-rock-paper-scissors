let humanScore = 0
let computerScore = 0

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
    return prompt("Choose between 'rock', 'paper', or 'scissors':")
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return console.log(`It's a tie! Both players chose ${humanChoice}`)
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            computerScore += 1
            return console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        }
        humanScore += 1
        return console.log(`You won! ${humanChoice} beats ${computerChoice}`)
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            computerScore += 1
            return console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        }
        humanScore += 1
        return console.log(`You won! ${humanChoice} beats ${computerChoice}`)
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            computerScore += 1
            return console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        }
        humanScore += 1
        return console.log(`You won! ${humanChoice} beats ${computerChoice}`)
    }
}

const humanSelection = getHumanChoice().toLowerCase()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection);