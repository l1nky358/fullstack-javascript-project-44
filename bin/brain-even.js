#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Even!');

const game = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  const answer = readlineSync.question(`Is ${number} even? (yes/no): `);
  const isEven = number % 2 === 0;
  const userSaysYes = answer.toLowerCase() === 'yes';

  if (isEven && userSaysYes || !isEven && answer.toLowerCase() === 'no') {
    console.log('Correct!');
    return true;
  }
  console.log(`Incorrect! The correct answer was ${isEven ? 'yes' : 'no'}.`);
  return false;
};

const playGame = () => {
  let rounds = 3;
  while (rounds > 0) {
    if (!game()) {
      console.log('Game over!');
      return;
    }
    rounds -= 1;
  }
  console.log('Congratulations! You won!');
};

playGame();
