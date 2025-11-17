#!/usr/bin/env node
import readlineSync from 'readline-sync'

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1

console.log('Welcome to the Brain Games!')
const userName = readlineSync.question('May I have your name? ')
console.log(`Hello, ${userName}!`)
console.log('Answer "yes" if the number is even, otherwise answer "no".')

const rounds = 3

for (let i = 0; i < rounds; i += 1) {
  const questionNumber = getRandomNumber()
  const question = questionNumber.toString()
  const answer = questionNumber % 2 === 0 ? 'yes' : 'no'

  console.log(`Question: ${question}`)
  const userAnswer = readlineSync.question('Your answer: ').trim().toLowerCase()

  if (userAnswer !== answer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`)
    console.log(`Let's try again, ${userName}!`)
    process.exit(1)
  }
  console.log('Correct!')
}

console.log(`Congratulations, ${userName}!`)
