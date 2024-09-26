// rock paper scissors game

// getting the computer choice
function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  let result = "";
  if (random === 0) {
    result = "rock";
  } else if (random === 1) {
    result = "paper";
  } else if (random === 2) {
    result = "scissors";
  }
  computerSelection.innerHTML = "computer choice: " + result;
  return result;
}

// getting the human choice

// envent handlers
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
rock.addEventListener("click", function () {
  humanSelection.innerHTML = "You selected rock";
  playRound("rock", getComputerChoice());
});

paper.addEventListener("click", function () {
  humanSelection.innerHTML = "You selected paper";
  playRound("paper", getComputerChoice());
});
scissors.addEventListener("click", function () {
  humanSelection.innerHTML = " You selected scissors";
  playRound("scissors", getComputerChoice());
});

// logic game

let playRound = function (humanChoice, computerChoice) {
  if (humanScroe == 5 || computerScore == 5) {
    if (humanScroe == 5) {
      gameResult.innerHTML = "you win the game";
    } else if (computerScore == 5) {
      gameResult.innerHTML = "you lose the game";
    }
    return;
  }
  if (humanChoice == "rock" && computerChoice == "scissors") {
    roundResult.innerHTML = "You win! Rock beats Scissors";
    humanScroe++;
    score.innerHTML =
      "computer score: " +
      computerScore +
      "<br>" +
      "human score: " +
      humanScroe;
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    roundResult.innerHTML = "You lose! Paper beats Rock";
    computerScore++;
    score.innerHTML =
      "computer score: " +
      computerScore +
      "<br>" +
      "human score: " +
      humanScroe;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    roundResult.innerHTML = "You win! Paper beats Rock";
    humanScroe++;
    score.innerHTML =
      "computer score: " +
      computerScore +
      "<br>" +
      "human score: " +
      humanScroe;
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    roundResult.innerHTML = "You lose! Scissors beats Paper";
    computerScore++;
    score.innerHTML =
      "computer score: " +
      computerScore +
      "<br>" +
      "human score: " +
      humanScroe;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    roundResult.innerHTML = "You lose! Rock beats Scissors";
    computerScore++;
    score.innerHTML =
      "computer score: " +
      computerScore +
      "<br>" +
      "human score: " +
      humanScroe;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    roundResult.innerHTML = "You win! Scissors beats Paper";
    humanScroe++;
    score.innerHTML =
      "computer score: " +
      computerScore +
      "<br>" +
      "human score: " +
      humanScroe;
  } else if (humanChoice == computerChoice) {
    roundResult.innerHTML = "It's a tie";
    score.innerHTML =
      "computer score: " +
      computerScore +
      "<br>" +
      "human score: " +
      humanScroe;
  } else {
    console.log("Something went wrong");
  }
};

// game result
let humanScroe = 0;
let computerScore = 0;
let gameResult = document.querySelector("#game-result");
let roundResult = document.createElement("p");
roundResult.innerHTML = "round result";
let computerSelection = document.createElement("p");
computerSelection.innerHTML = "computer choice: " + getComputerChoice();
gameResult.appendChild(computerSelection);
let humanSelection = document.createElement("p");
gameResult.appendChild(humanSelection);
let score = document.createElement("p");
score.innerHTML =
  "computer score: " + computerScore + "<br>" + "human score: " + humanScroe;
gameResult.appendChild(score);

gameResult.appendChild(roundResult);
