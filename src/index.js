
import readlineSync from 'readline-sync';

export const MAX_ROUNDS = 3;

export const runGame = (game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  for (let i = 0; i < MAX_ROUNDS; i++) {
    const { question, correctAnswer } = game.generateQuestion();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== String(correctAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    } else {
      console.log('Correct!');
    }
  }

  console.log(`Congratulations, ${name}!`);
};
