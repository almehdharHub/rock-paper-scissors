// rock paper scissors
function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);

  if (random === 0) {
    return "rock";
  } else if (random === 1) {
    return "paper";
  } else if (random === 2) {
    return "scissors";
  }
  console.log(random);
}
console.log(getComputerChoice());

function getHumanChoice() {
  let answer = prompt("rock, paper or scissors?");
  console.log(answer);
}

getHumanChoice();
