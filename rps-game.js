

function getComputerChoice() {

    const numberRandom = Math.random();
    if (numberRandom < 1 / 3) {
        return "rock";
    } else if (numberRandom >= 1 / 3 && numberRandom < 2 / 3) {
        return "paper";
    } else {
        return "scissors";
    }
}
// logic to get human choice
function getHumanChoice() {
    let humanChoice = prompt("Enter rock, paper, or scissors");
    return humanChoice.toLowerCase();
}
let humanScore = 0;
let computerScore = 0;

function playGame() {
    // play round function
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock" && computerChoice == "rock") {
            console.log("It is a tie!");
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("Human wins!");
            humanScore++;
        } else if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("Computer wins!");
            computerScore++;
        } else if (humanChoice == "scissors" && computerChoice == "scissors") {
            console.log("It is a tie!");
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("Human wins!");
            humanScore++;
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log("Computer wins!");
            computerScore++;
        } else if (humanChoice == "paper" && computerChoice == "paper") {
            console.log("It is a tie!");
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("Human wins!");
            humanScore++;
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log("Computer wins!");
            computerScore++;
        };
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice()); 

    return humanScore;
    return computerScore;
    
}
playGame();
console.log(humanScore);
console.log(computerScore);





