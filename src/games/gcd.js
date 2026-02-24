import { getRandomNumber } from '../helpers.js'

const getGcd = (a, b) => {
  return b === 0 ? a : getGcd(b, a % b)
}

const description = 'Find the greatest common divisor of given numbers.'

const run = () => {
  const number1 = getRandomNumber(1, 100)
  const number2 = getRandomNumber(1, 100)
  const question = `${number1} ${number2}`
  const answer = String(getGcd(number1, number2))

  return {
    question,
    answer,
  }
}

export const brainGcd = {
  description,
  run,
}
