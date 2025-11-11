// src/games/brain-calc.js
import { getRandomInt } from '../utils.js';

const operators = ['+', '-', '*'];

const generateExpression = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const operator = operators[getRandomInt(0, operators.length - 1)];
  const question = `${num1} ${operator} ${num2}`;
  let answer;
  switch (operator) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
  }
  return { question, answer: answer.toString() };
};

const run = () => {
  const { question, answer } = generateExpression();
  console.log(`Question: ${question}`);
  const userAnswer = prompt('Your answer:');
  if (userAnswer === answer) {
    console.log('Correct!');
    return true;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
    return false;
  }
};

export default { run };
