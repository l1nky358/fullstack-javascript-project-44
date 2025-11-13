import { getRandomInt } from './src/utils.js'; 
import { generateOperation } from './src/utils.js';

const OPERATIONS = ['+', '-', '*'];

const generateQuestion = () => {
  const num1 = getRandomInt(1, 50);
  const num2 = getRandomInt(1, 50);
  const operation = generateOperation();
  const question = `${num1} ${operation} ${num2}`;
  
  let correctAnswer;
  switch (operation) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
  }

  return { question, correctAnswer };
};

export default {
  generateQuestion,
};
