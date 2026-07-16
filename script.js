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

console.log(getComputerChoice())