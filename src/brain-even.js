const readlineSync = require('readline-sync')

const MAX_QUESTIONS = 3

function isEven(number) {
  return number % 2 === 0
}

function brainEven() {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  let correctAnswersCount = 0

  while (correctAnswersCount < MAX_QUESTIONS) {
    const number = Math.floor(Math.random() * 100) + 1
    const correctAnswer = isEven(number) ? 'yes' : 'no'

    console.log(`Question: ${number}`)
    const userAnswer = readlineSync.question('Your answer: ').trim().toLowerCase()

    if (userAnswer !== 'yes' && userAnswer !== 'no') {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }

    if (userAnswer === correctAnswer) {
      console.log('Correct!')
      correctAnswersCount += 1
    } 
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}

module.exports = brainEven
