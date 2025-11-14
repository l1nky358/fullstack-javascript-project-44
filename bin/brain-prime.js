#!/usr/bin/env node

import readlineSync from 'readline-sync';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const runGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const totalQuestions = 3;

  for (let i = 0; i < totalQuestions; i++) {
    const number = Math.floor(Math.random() * 100) + 1; 
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ').trim().toLowerCase();

    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

runGame();
