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
  return result;
}

// getting the human choice
function getHumanChoice() {
  let answer = prompt("rock, paper or scissors?");
  return answer;
}

// logic for play a game of 5 rounds

function playGame() {
  // logic for a single round

  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  let humanScroe = 0;
  let computerScore = 0;
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
  for (let i = 0; i < 5; i++) {
    console.log(i);
    playRound(humanSelection, computerSelection);

    humanSelection = getHumanChoice();

    computerSelection = getComputerChoice();
  }
  if (humanScroe > computerScore) {
    console.log("You win the game, end game");
  } else if (humanScroe < computerScore) {
    console.log("You lose the game, end game");
  } else {
    console.log("Tie game, end game");
  }
}
playGame();
