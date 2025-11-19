import readlineSync from 'readline-sync'

const operators = ['+', '-', '*']

const generateExpression = () => {
  const num1 = Math.floor(Math.random() * 100) + 1
  const num2 = Math.floor(Math.random() * 100) + 1
  const operator = operators[Math.floor(Math.random() * operators.length)]
  const question = `${num1} ${operator} ${num2}`
  let answer
  switch (operator) {
    case '+':
      answer = num1 + num2
      break
    case '-':
      answer = num1 - num2
      break
    case '*':
      answer = num1 * num2
      break
  }
  return { question, answer: answer.toString() }
}

const playBrainCalc = () => {
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log('What is the result of the expression?')
  
  const rounds = 3
  for (let i = 0; i < rounds; i++) {
    const { question, answer } = generateExpression()
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `)
    if (userAnswer === answer) {
      console.log('Correct!')
    } 
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}
export default playBrainCalc
