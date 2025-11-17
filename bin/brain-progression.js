#!/usr/bin/env node

import readlineSync from 'readline-sync'

const generateProgression = () => {
  const minLength = 5
  const maxLength = 10
  const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength

  const start = Math.floor(Math.random() * 50)
  const step = Math.floor(Math.random() * 10) + 1

  const progression = []
  const hiddenIndex = Math.floor(Math.random() * length)
  let correctAnswer = null

  for (let i = 0; i < length; i++) {
    const currentElement = start + i * step
    if (i === hiddenIndex) {
      progression.push('..')
      correctAnswer = currentElement.toString()
    } else {
      progression.push(currentElement.toString())
    }
  }

  return { progression, correctAnswer }
}

const runGame = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log('What number is missing in the progression?')

  const totalQuestions = 3

  for (let i = 0; i < totalQuestions; i++) {
    const { progression, correctAnswer } = generateProgression()
    const questionStr = `Question: ${progression.join(' ')}`

    console.log(questionStr)
    const userAnswer = readlineSync.question('Your answer: ').trim()

    if (userAnswer === correctAnswer) {
      console.log('Correct!')
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}

runGame()
