import readline from 'readline-sync';
import brainCalcGame from './games/brain-calc.js'; 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Welcome to the Brain Games!');
rl.question('May I have your name? ', (name) => {
    console.log(`Hello, ${name}!`);
    console.log('What is the result of the expression?');

    brainCalcGame.startBrainCalc(name); 
});
