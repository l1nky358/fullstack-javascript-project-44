#!/usr/bin/env node
import readlineSync from 'readline-sync'

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".'

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1

const isEven = (num) => num % 2 === 0

console.log('Welcome to the Brain Games!')
const name = readlineSync.question('May I have your name? ')
console.log(`Hello, ${name}!`)
console.log(gameRule)

let correctAnswersCount = 0

while (correctAnswersCount < 3) {
  const number = getRandomNumber()
  const correctAnswer = isEven(number) ? 'yes' : 'no'

  console.log(`Question: ${number}`)
  const userAnswer = readlineSync.question('Your answer: ').trim().toLowerCase()

  if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
    console.log(`Let's try again, ${name}!`)
    process.exit(0)
  } else {
    console.log('Correct!')
    correctAnswersCount += 1
  }
}
