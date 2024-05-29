// make welcoming message
// set Function promptMessage
function promptMessage() {
  // display welcome message
  console.log("Welcome to Rock Paper Message game!!");
}

// Asking user to choose
// set function userChoice
function userChoice() {
  // set variable to store users input
  let userInput = prompt("Choose one (Rock, Paper, Scissors)");
  return userInput;
}

// Picking the computer choice
// set function computerChoice
function computerChoice() {
  // set an array to store a list for the computer to pick from
  const prompts = ["Rock", "Paper", "Scissors"];
  // set a constant to store the randomly picked choice
  const randomPrompts = prompts[Math.floor(Math.random() * prompts.length)];
  return randomPrompts;
}

// Picking the winner
// set function called pickWinner
function pickWinner() {
  // make an if else statement to camper the computer and users choice
  if (userChoice() === "Rock" && computerChoice() === "Paper") {
    console.log("You lose: Paper beats Rock");
  } else if (userChoice() === "Paper" && computerChoice() === "Rock") {
    console.log("You win: Paper beats Rock");
  } else if (userChoice() === "Paper" && computerChoice() === "Scissors") {
    console.log("You lose: Scissors beats Paper");
  } else if (userChoice() === "Scissors" && computerChoice() === "Paper") {
    console.log("You win: Scissors beats Paper");
  } else if (userChoice() === "Rock" && computerChoice() === "Scissors") {
    console.log("You win: Rock beats Scissors");
  } else if (userChoice() === "Scissors" && computerChoice() === "Rock") {
    console.log("You lose: Rock beats Scissors");
  }
}


