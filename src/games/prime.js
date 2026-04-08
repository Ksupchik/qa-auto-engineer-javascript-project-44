import { runGame } from '../index.js'
import { getRandomNumber } from '../helpers.js'

const isPrime = (num) => {
  if (num < 2) {
    return false
  }

  const sqrt = Math.sqrt(num)

  for (let i = 2; i <= sqrt; i += 1) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

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
