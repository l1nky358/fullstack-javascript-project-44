import readline from 'readline-sync';

function generateExpression() {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    
    return {num1, num2, operator};
}

function checkAnswer(answer, correctAnswer) {
    if (answer === correctAnswer.toString()) {
        console.log("Correct!");
        return true;
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        return false;
    }
}

export default function startBrainCalc(name) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let roundCount = 0;
    const maxRounds = 3;

    function playRound() {
        const exprObj = generateExpression();
        const question = `${exprObj.num1} ${exprObj.operator} ${exprObj.num2}`;
        
        let correctAnswer;
        switch(exprObj.operator) {
            case '+':
                correctAnswer = exprObj.num1 + exprObj.num2;
                break;
            case '-':
                correctAnswer = exprObj.num1 - exprObj.num2;
                break;
            case '*':
                correctAnswer = exprObj.num1 * exprObj.num2;
                break;
        }

        console.log(`Question: ${question}`);
        rl.question("Your answer: ", (input) => {
            if (!checkAnswer(input.trim(), correctAnswer)) {
                console.log(`Let's try again, ${name}!`);
                rl.close();
            } else {
                roundCount++;
                if (roundCount >= maxRounds) {
                    console.log(`Congratulations, ${name}!`);
                    rl.close();
                } else {
                    playRound(); 
                }
            }
        });
    }

    playRound(); 
};

