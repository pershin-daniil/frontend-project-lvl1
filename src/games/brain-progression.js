import runGame from '../index.js';
import getRandomInt from '../utilities.js';

const createRandomProgression = (min, max) => {
  const size = getRandomInt(min, max);
  // Create first number os sequenceOfNumbers
  const sequenceOfNumbers = [getRandomInt(0, 99)];
  const step = getRandomInt(1, 20);
  // Progression formula (from 1 to i): a[i] = a[1] + (i - 1)d
  for (let i = 2; i <= size; i += 1) {
    const firstNum = sequenceOfNumbers[0];
    const nextNum = firstNum + (i - 1) * step;
    sequenceOfNumbers.push(nextNum);
  }
  return sequenceOfNumbers;
};

const generateRound = () => {
  const progression = createRandomProgression(5, 10);
  const indexToChange = getRandomInt(0, progression.length - 1);
  const correctAnswer = progression[indexToChange];
  const progressionForQuestion = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const num of progression) {
    if (num === correctAnswer) progressionForQuestion.push('..');
    if (num !== correctAnswer) progressionForQuestion.push(num);
  }

  const questionProgressionString = progressionForQuestion.join(' ');
  const question = `Question: ${questionProgressionString}`;
  return [String(correctAnswer), question];
};

const description = 'What number is missing in the progression?';

export default () => runGame(description, generateRound);
