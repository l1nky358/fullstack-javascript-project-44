#!/usr/bin/env node

import readlineSync from 'readline-sync';

const generateProgression = (length, start, step, hiddenIndex) => {
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }
  const answer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  return { progression, answer };
};

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const startGame = (name) => {
  console.log('What number is missing in the progression?');

  let correctAnswersCount = 0;

  while (true) {
    const length = Math.max(5, Math.floor(Math.random() * 6) + 5); // 5-10
    const start = Math.floor(Math.random() * 50);
    const step = Math.floor(Math.random() * 10) + 1; // 1-10
    const hiddenIndex = Math.floor(Math.random() * length);

    const { progression, answer } = generateProgression(length, start, step, hiddenIndex);
    const question = progression.join(' ');

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer.toString()) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
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

main();
