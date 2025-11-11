#!/usr/bin/env node

const { generateRandomNumber } = require('../src/utils');
import readlineSync from 'readline-sync';

const isEven = num => num % 2 === 0;

const playBrainEvenGame = () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}`);

  for (let i = 0; i < 3; i++) {
    const randomNum = generateRandomNumber();
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question("Is it even? (yes/no): ").toLowerCase();
    
    if ((isEven(randomNum) && answer !== 'yes') || (!isEven(randomNum) && answer !== 'no')) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven(randomNum) ? 'yes' : 'no'}'.`);
      return false;
    }
    console.log("Correct!");
  }

  console.log(`Congratulations, ${name}! You've won.`);
};

playBrainEvenGame();
