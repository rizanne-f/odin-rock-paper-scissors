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
console.log(getHumanChoice())