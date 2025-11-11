#!/usr/bin/env node

function startGame() {
  console.log('Hello, Tirion');
  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);
  const operations = ['+', '-', '*'];
  const operation = operations[Math.floor(Math.random() * operations.length)];

  console.log(`Question: ${number1} ${operation} ${number2}`);
}

startGame();

export { startGame };
