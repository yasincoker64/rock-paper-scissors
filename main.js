const rockButton = document.getElementById("rockBtn");
const paperButton = document.getElementById("paperBtn");
const scissorsButton = document.getElementById("scissorsBtn");
const resetButton = document.getElementById("resetBtn");
const playerResult = document.getElementById("result-player");
const computerResult = document.getElementById("result-computer");
const roundResult = document.getElementById("result-round");
let playerWins = 0;
let computerWins = 0;

rockButton.addEventListener("click", function () {
  let playerSelection = "rock";
  let computerSelection = getComputerChoise();
  playRound(playerSelection, computerSelection);
});

paperButton.addEventListener("click", function () {
  let playerSelection = "paper";
  let computerSelection = getComputerChoise();
  playRound(playerSelection, computerSelection);
});

scissorsButton.addEventListener("click", function () {
  let playerSelection = "scissors";
  let computerSelection = getComputerChoise();
  playRound(playerSelection, computerSelection);
});

resetButton.addEventListener("click", function () {
  resetGame();
});

function getComputerChoise() {
  const choises = ["rock", "paper", "scissors"];
  let randomNum = Math.floor(Math.random() * 3);
  return choises[randomNum];
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection === "rock")
  ) {
    playerWin();
    roundResult.innerHTML = `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    computerWin();
    roundResult.innerHTML = `You lose! ${computerSelection} beats ${playerSelection.toLowerCase()}`;
  } else if (playerSelection === computerSelection) {
    roundResult.innerHTML = `It's a tie!`;
  }

  if (playerWins === 5) {
    roundResult.innerHTML = "Congratulations, you have won the game!";
    resetButton.style.display = "block";
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  } else if (computerWins === 5) {
    roundResult.innerHTML =
      "Unfortunately, you lost; the computer won the game.";
    resetButton.style.display = "block";
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  }
}

function resetGame() {
  playerWins = 0;
  computerWins = 0;
  playerResult.innerHTML = playerWins;
  computerResult.innerHTML = computerWins;
  roundResult.innerHTML = "The first to reach five wins, make your choice!";
  resetButton.style.display = "none";
  rockButton.disabled = false;
  paperButton.disabled = false;
  scissorsButton.disabled = false;
}

function playerWin() {
  playerWins++;
  playerResult.innerHTML = playerWins;
}

function computerWin() {
  computerWins++;
  computerResult.innerHTML = computerWins;
}
