#!/usr/bin/env node

import readlineSync from 'readline-sync';

const isEven = num => num % 2 === 0;

const playBrainEvenGame = () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!\nAnswer \"yes\" if the number is even, otherwise answer \"no\".`);

  let roundCount = 0;

  while (roundCount < 3) {
    const randomNum = Math.floor(Math.random() * 100) + 1; // Генерируем случайное число от 1 до 100
    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question("Your answer: ").trim().toLowerCase();

    if ((isEven(randomNum) && userAnswer === 'yes') || (!isEven(randomNum) && userAnswer === 'no')) {
      console.log("Correct!");
      roundCount++;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven(randomNum) ? 'yes' : 'no'}'. Let's try again, ${name}!`);
      break;
    }
  }

  if (roundCount === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

playBrainEvenGame();
