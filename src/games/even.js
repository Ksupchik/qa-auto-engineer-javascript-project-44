import { getRandomNumber } from '../helpers.js'

const isEven = num => num % 2 === 0

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const run = () => {
  const number = getRandomNumber(1, 100)
  const question = String(number)
  const answer = isEven(number) ? 'yes' : 'no'

  return {
    question,
    answer,
  }
}

export const brainEven = {
  description,
  run,
}
