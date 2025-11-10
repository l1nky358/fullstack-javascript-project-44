#!/usr/bin/env node

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const startGame = () => {
  rl.question('Welcome to the Brain Games!\nMay I have your name? ', (name) => {
    console.log(`Hello, ${name}!`);
    let questionsCount = 0;
    const totalQuestions = 3;

    const askQuestion = () => {
      if (questionsCount >= totalQuestions) {
        console.log(`Congratulations, ${name}! You won!`);
        rl.close();
        return;
      }
      const number = getRandomNumber();
      rl.question(`Answer "yes" if given number is prime. Otherwise answer "no".\nQuestion: ${number}\nYour answer: `, (answer) => {
        const correctAnswer = isPrime(number) ? 'yes' : 'no';
        if (answer.toLowerCase() === correctAnswer) {
          console.log('Correct!');
          questionsCount++;
          askQuestion();
        } else {
          console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
          rl.close();
        }
      });
    };

    askQuestion();
  });
};

startGame();
