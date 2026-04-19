import { runGame } from '../index.js'
import { getRandomNumber } from '../helpers.js'

const operators = ['+', '-', '*']
const description = 'What is the result of the expression?'

const calc = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2

    case '-':
      return number1 - number2

    case '*':
      return number1 * number2

    default:
      throw new Error('Unknown operator')
  }
}

const run = () => {
  const number1 = getRandomNumber(1, 100)
  const number2 = getRandomNumber(1, 100)
  const operator = operators[getRandomNumber(0, operators.length - 1)]

  const question = `${number1} ${operator} ${number2}`
  const answer = String(calc(number1, number2, operator))

  return {
    question,
    answer,
  }
}

export default () => runGame({ description, run })
