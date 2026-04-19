import { runGame } from '../index.js'
import { getRandomNumber } from '../helpers.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = number => number % 2 === 0

const run = () => {
  const number = getRandomNumber(1, 100)
  const question = String(number)
  const answer = isEven(number) ? 'yes' : 'no'

  return {
    question,
    answer,
  }
}

export default () => runGame({ description, run })
