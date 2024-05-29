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
function pickWinner(user, computer) {
  // make an if else statement to camper the computer and users choice
  if (user === "Rock" && computer === "Paper") {
    console.log("You lose: Paper beats Rock");
  } else if (user === "Paper" && computer === "Rock") {
    console.log("You win: Paper beats Rock");
  } else if (user === "Paper" && computer === "Scissors") {
    console.log("You lose: Scissors beats Paper");
  } else if (user === "Scissors" && computer === "Paper") {
    console.log("You win: Scissors beats Paper");
  } else if (user === "Rock" && computer === "Scissors") {
    console.log("You win: Rock beats Scissors");
  } else if (user === "Scissors" && computer === "Rock") {
    console.log("You lose: Rock beats Scissors");
  } else {
    console.log("Enter correct input!!");
  }
}

// make an CLI to display and interact with the code
// set function called display
function display() {
  // display welcome message
  promptMessage();
  const userSelection = userChoice();
  const computerSelection = computerChoice();
  // display user input
  console.log("you choose ", userSelection);
  // display computer choice
  console.log("computer choose ", computerSelection);
  // display winner
  console.log(pickWinner(userSelection, computerSelection));
}

//  display();
