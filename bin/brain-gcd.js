#!/usr/bin/env node

import readlineSync from 'readline-sync';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const startGame = (name) => {
  console.log('Find the greatest common divisor of given numbers.');

  let correctAnswersCount = 0;

  while (true) {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    const question = `${num1} ${num2}`;
    const correctAnswer = gcd(num1, num2).toString();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (correctAnswersCount >= 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

const main = () => {
  const name = greetUser();
  startGame(name);
};


