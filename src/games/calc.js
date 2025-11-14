import { runGame } from '../src/index.js';

const getQuestionAndAnswer = () => {
  const operations = ['+', '-', '*'];
  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);
  const operation = operations[Math.floor(Math.random() * operations.length)];
  const question = `${number1} ${operation} ${number2}`;
  let answer;
  switch (operation) {
    case '+':
      answer = number1 + number2;
      break;
