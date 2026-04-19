import { runGame } from '../index.js'
import { getRandomNumber } from '../helpers.js'

const description = 'What number is missing in the progression?'

const generateProgression = (start, step, length) => {
  return Array.from({ length }, (_, i) => start + i * step)
}

const run = () => {
  const length = getRandomNumber(5, 15)
  const startNum = getRandomNumber(1, 15)
  const step = getRandomNumber(1, 15)

  const hiddenIndex = getRandomNumber(0, length - 1)
  const progression = generateProgression(startNum, step, length)

  const question = progression
    .map((num, i) => (i === hiddenIndex ? '..' : num))
    .join(' ')
  const answer = String(startNum + step * hiddenIndex)

  return {
    question,
    answer,
  }
}

export default () => runGame({ description, run })
