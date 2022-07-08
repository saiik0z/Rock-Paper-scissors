const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "BOMBA"
  ) {
    return userInput;
  } else {
    console.log("Aie choisi la bonne posture pardi");
  }
};
//console.log(getUserChoice('Paper'))
//console.log(getUserChoice('scissors'))
//console.log(getUserChoice('ROdsCK'))

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissors";
  } else {
    return "il y a un prb";
  }

  //switch (randomNumber) {
  // case 0: return 'rock';
  // case 1: return 'paper';
  //case 2: return 'scissors';
  // }
};
//console.log(getComputerChoice());
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "BOMBA") {
    return "le USER NIKE TOUTTTT";
  }
  if (userChoice === computerChoice) {
    return "le jeu est a egaliter sa mm";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "You won";
    } else {
      return "The computer won!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "paper") {
      return "You won!";
    } else {
      return "The computer won!";
    }
  }
};
//console.log(determineWinner('rock','paper'))
//console.log(determineWinner('paper','paper'))
//console.log(determineWinner('scissors','paper'))
const playGame = () => {
  let userChoice = getUserChoice("BOMBA");
  const computerChoice = getComputerChoice();
  //console.log(userChoice);
  //console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame();

//Change de user choice for change the game
