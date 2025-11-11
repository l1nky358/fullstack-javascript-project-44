
import { startGame } from '../src/index.js';

const OPERATORS = ['+', '-', '*'];

const getRandomOperator = () => OPERATORS[Math.floor(Math.random() * OPERATORS.length)];

const generateRoundData = () => {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  const operator = getRandomOperator();
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
    default:
      answer = null; // на всякий случай
  }

  return { question, answer };
};

export const startGameCalc = () => {
  const gameDescription = 'What is the result of the expression?';
  startGame(gameDescription, generateRoundData);
};
