import { getRandomNumber } from '../helpers.js'

const getRandomOperator = () => {
  const operators = ['+', '-', '*']
  const index = getRandomNumber(0, operators.length - 1)
  return operators[index]
}

const calc = (number1, number2, operator) => {
  let result = ''

  switch (operator) {
    case '+':
      result = number1 + number2
      break

    case '-':
      result = number1 - number2
      break

    case '*':
      result = number1 * number2
      break
  }

  return result
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

export const brainCalc = { description, run }
