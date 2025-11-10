#!/usr/bin/env node

console.log('Hello, Tirion');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const generateQuestion = () => {
  const num = Math.floor(Math.random() * 100);
  return num;
};

const isEven = (num) => num % 2 === 0;

const askQuestion = (question) => {
  return new Promise((resolve) => {
    rl.question(`Question: ${question}\n`, (answer) => {
      resolve(answer);
    });
  });
};

(async () => {
  const number = generateQuestion();
  const answer = await askQuestion(number);

  const correctAnswer = isEven(number) ? 'yes' : 'no';

  if (answer.trim().toLowerCase() === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`Incorrect! The correct answer was ${correctAnswer}.`);
  }

  console.log('Game over!');
  rl.close();
})();
