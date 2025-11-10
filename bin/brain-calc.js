

// Определение функции startGame
function startGame() {
  // Пример реализации: выводит вопрос калькулятора
  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);
  const operations = ['+', '-', '*'];
  const operation = operations[Math.floor(Math.random() * operations.length)];

  const question = `Question: ${number1} ${operation} ${number2}`;
  console.log(question);
  // Дополнительная логика игры
}

// Экспорт функции startGame
export { startGame };
