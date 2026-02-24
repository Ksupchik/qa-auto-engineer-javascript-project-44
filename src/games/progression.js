import { getRandomNumber } from '../helpers.js'

const generateProgression = (start, step, length, hiddenIndex) => {
  return Array.from({ length }, (_, i) => (
    i === hiddenIndex ? '..' : start + i * step
  )).join(' ')
}

const description = 'What number is missing in the progression?'

const run = () => {
  const length = getRandomNumber(5, 15)
  const startNum = getRandomNumber(1, 15)
  const step = getRandomNumber(1, 15)

  const hiddenIndex = getRandomNumber(0, length - 1)

  const question = generateProgression(startNum, step, length, hiddenIndex)
  const answer = String(startNum + step * hiddenIndex)

  return {
    question,
    answer,
  }
}

export const brainProgression = {
  description,
  run,
}
