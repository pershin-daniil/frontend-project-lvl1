import runGame from '../index.js';
import getRandomInt from '../utilities.js';

const generateRound = () => {
  const size = getRandomInt(5, 10);

  // Create first number os sequenceOfNumbers
  const progression = [getRandomInt(0, 99)];
  const step = getRandomInt(1, 20);

  // Progression formula (from 1 to i): a[i] = a[1] + (i - 1)d
  for (let i = 2; i <= size; i += 1) {
    const firstNum = progression[0];
    const nextNum = firstNum + (i - 1) * step;
    progression.push(nextNum);
  }

  const indexToChange = getRandomInt(0, progression.length - 1);
  const answer = progression[indexToChange];
  const progressionForQuestion = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const num of progression) {
    if (num === answer) progressionForQuestion.push('..');
    if (num !== answer) progressionForQuestion.push(num);
  }

  const questionProgressionString = progressionForQuestion.join(' ');
  const question = `Question: ${questionProgressionString}`;
  return [answer.toString(), question];
};

const description = 'What number is missing in the progression?';

export default () => runGame(description, generateRound);
