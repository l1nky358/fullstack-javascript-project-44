#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGCD(b, a % b);
}
const generateNumbers = () => {
  const min = 1;
  const max = 100;
  const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
  const num2 = Math.floor(Math.random() * (max - min + 1)) + min;
  return [num1, num2];
}

const runGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');

  const totalQuestions = 3;

  for (let i = 0; i < totalQuestions; i++) {
    const [num1, num2] = generateNumbers();
    const question = `${num1} ${num2}`;
    const correctAnswer = getGCD(num1, num2).toString();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return; 
    }
  }

  console.log(`Congratulations, ${name}!`);
}

runGame();
