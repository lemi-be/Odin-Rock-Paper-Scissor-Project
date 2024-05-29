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

