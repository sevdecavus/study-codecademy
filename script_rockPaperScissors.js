const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if( userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
  return userInput;
}else{
  return console.log('Error!!');
}
};


// console.log(getUserChoice('ROCK'));

const getComputerChoice = () => {
  Math.floor(Math.random() * 3);
  let randomNumber = 2;
  switch (randomNumber) {
  case 0:
    return 'rock';
  case 1:
    return 'paper';
  case 2:
  return 'scissors';
}
}
console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
  return 'The game is a tie!';
}else if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'The computer won!';
  } else {
    return 'You won!';
  }
}
}
console.log(determineWinner('paper', 'scissors'));
console.log(determineWinner('paper', 'paper'));
console.log(determineWinner('paper', 'rock')); 
