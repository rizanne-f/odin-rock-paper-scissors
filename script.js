let humanScore = 0
let computerScore = 0

const buttons = document.querySelectorAll("button")
const roundResults = document.getElementById("round-results")
const gameResults = document.getElementById("game-results")
const playerScoreSpan = document.getElementById("player-score")
const computerScoreSpan = document.getElementById("computer-score")

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        playRound(e.target.id, getComputerChoice())
        checkScore()
    })
})

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

function updateTextContent(element, val) {
    element.textContent = val
}

function playRound(humanChoice, computerChoice) {
    let resultText = "";
    
    if (humanChoice === computerChoice) {
        resultText = `It's a tie! Both players chose ${humanChoice}`
        return updateTextContent(roundResults, resultText)
    }

    function updateScore(player) {
        if (player === "human") {
            updateTextContent(playerScoreSpan, humanScore += 1)
            resultText = `You win! ${humanChoice} beats ${computerChoice}`
        } else {
            updateTextContent(computerScoreSpan, computerScore += 1)
            resultText = `You lose! ${computerChoice} beats ${humanChoice}`
        }
    }

    switch (humanChoice) {
        case "rock":
            (computerChoice === "paper")
            ? updateScore("computer")
            : updateScore("human")
            break;
        case "paper":
            (computerChoice === "scissors")
            ? updateScore("computer")
            : updateScore("human")
            break;
        case "scissors":
            (computerChoice === "rock")
            ? updateScore("computer")
            : updateScore("human")
    }
    
    updateTextContent(roundResults, resultText)
}

function checkScore() {
    if (humanScore === 5) {
        updateTextContent(gameResults, "Game Over: Congratulations, You win!")
        buttons.forEach(btn => btn.setAttribute("disabled", ""))
    } else if (computerScore === 5) {
        updateTextContent(gameResults, "Game Over: Computer wins!")
        buttons.forEach(btn => btn.setAttribute("disabled", ""))
    }
}