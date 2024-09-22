// rock paper scissors

let humanScroe = 0;
let computerScore = 0;
function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);

  if (random === 0) {
    return "rock";
  } else if (random === 1) {
    return "paper";
  } else if (random === 2) {
    return "scissors";
  }

  console.log(getComputerChoice());
}

function getHumanChoice() {
  let answer = prompt("rock, paper or scissors?");
  console.log(answer);
  return answer.toLocaleLowerCase();
}

let playRound = function (humanChoice, computerChoice) {
  if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("You win! Rock beats Scissors");
    humanScroe++;
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("You lose! Paper beats Rock");
    computerScore++;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("You win! Paper beats Rock");
    humanScroe++;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("You lose! Scissors beats Paper");
    computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("You lose! Rock beats Scissors");
    computerScore++;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("You win! Scissors beats Paper");
    humanScroe++;
  } else if (humanChoice == computerChoice) {
    console.log("Tie game");
  } else {
    console.log("Something went wrong");
  }
};
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
console.log(getComputerChoice());
