import { runGame } from '../index.js'
import { getRandomNumber } from '../helpers.js'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = (number) => {
  if (number < 2) {
    return false
  }

  const limit = Math.sqrt(number)

  for (let i = 2; i <= limit; i += 1) {
    if (number % i === 0) {
      return false
    }
  }

  return true
}

const run = () => {
  const number = getRandomNumber(1, 100)
  const question = String(number)
  const answer = isPrime(number) ? 'yes' : 'no'

  return {
    question,
    answer,
  }
}

export default () => runGame({ description, run })
