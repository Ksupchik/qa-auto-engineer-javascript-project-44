import readlineSync from 'readline-sync'

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const isEven = num => num % 2 === 0

const requiredWins = 3

export const brainEven = () => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}`)
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  let wins = 0

  while (wins < requiredWins) {
    const number = getRandomNumber(1, 100)
    const question = String(number)
    const answer = isEven(number) ? 'yes' : 'no'

    console.log(`Question: ${question}`)

    const userAnswer = readlineSync.question('Your answer:  ')

    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`)
      console.log(`Let's try again, ${name}!`)
      wins = 0
    }
    else {
      console.log('Correct!')
      wins += 1
    }
  }

  console.log(`Congratulations, ${name}!`)
}
