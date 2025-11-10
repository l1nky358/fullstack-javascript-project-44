const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getQuestionAndAnswer = () => {
  const operations = ['+', '-', '*'];
  const operation = operations[getRandomInt(0, operations.length - 1)];
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const question = `${num1} ${operation} ${num2}`;
  let answer;

  switch (operation) {
    case '+':

  }
}