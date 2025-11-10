import readlineSync from 'readline-sync';

const roundsCount = 3;

const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const runGame = (gameName) => {
  const userName = getUserName();

  const gameFunctions = {
    calc: () => {
      for (let i = 0; i < roundsCount; i += 1) {
        const num1 = Math.floor(Math.random() * 100);
        const num2 = Math.floor(Math.random() * 100);
        const operations = ['+', '-', '*'];
        const operation = operations[Math.floor(Math.random() * operations.length)];
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

        console.log(`Question: ${num1} ${operation} ${num2}`);
        const answer = readlineSync.question('Your answer: ');

        if (Number(answer) !== correctAnswer) {
          console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
          console.log(`Let's try again, ${userName}!`);
          return;
        } else {
          console.log('Correct!');
        }
      }
      console.log(`Congratulations, ${userName}!`);
    },
   
  };

  if (gameFunctions[gameName]) {
    gameFunctions[gameName]();
  } else {
    console.log('Unknown game');
  }
};

export { startGame };
