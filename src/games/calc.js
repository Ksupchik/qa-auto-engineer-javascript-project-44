import { runGame } from '../index.js'
import { getRandomNumber } from '../helpers.js'

const getRandomOperator = () => {
  const operators = ['+', '-', '*']
  const index = getRandomNumber(0, operators.length - 1)
  return operators[index]
}

const calc = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2

    case '-':
      return number1 - number2

    case '*':
      return number1 * number2
  }
}

const description = 'What is the result of the expression?'

const run = () => {
  const number1 = getRandomNumber(1, 100)
  const number2 = getRandomNumber(1, 100)
  const operator = getRandomOperator()

  const question = `${number1} ${operator} ${number2}`
  const answer = String(calc(number1, number2, operator))

  return {
    question,
    answer,
  }
}

export default () => runGame({ description, run })
