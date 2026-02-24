import readlineSync from 'readline-sync'

const requiredWins = 3

export const runGame = (game) => {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log(game.description)

  let wins = 0

  while (wins < requiredWins) {
    const { question, answer } = game.run()
    console.log(`Question: ${question}`)

    const userAnswer = readlineSync.question('Your answer: ')

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
