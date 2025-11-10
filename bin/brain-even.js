#!/usr/bin/env node
// This script implements the "Brain Even"

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const generateQuestion = () => Math.floor(Math.random() * 100) + 1;

const startGame = () => {
  const questionNumber = generateQuestion();
  console.log(`Question: ${questionNumber}`);
  rl.question('Your answer (yes/no): ', (answer) => {
    const isEven = questionNumber % 2 === 0;
    const expectedAnswer = isEven ? 'yes' : 'no';

    if (answer.toLowerCase() === expectedAnswer) {
      console.log('Correct!');
    } else {
      console.log(`Incorrect. The correct answer is '${expectedAnswer}'.`);
    }
    rl.close();
  });
};

startGame();
