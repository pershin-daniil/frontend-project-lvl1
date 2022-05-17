import runGame from '../index.js';
import getRandomInt from '../utilities.js';

const MIN_NUMBER = 0;
const MAX_NUMBER = 99;

const generateProgression = (firstNum, step, size) => {
  const result = [firstNum];
  for (let i = 2; i <= size; i += 1) {
    const nextNum = firstNum + (i - 1) * step;
    result.push(nextNum);
  }
  return result;
};

const generateRound = () => {
  const size = getRandomInt(5, 10);
  const firstNum = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const step = getRandomInt(1, 20);

  const progression = generateProgression(firstNum, step, size);

  const indexToChange = getRandomInt(0, progression.length - 1);
  const answer = progression[indexToChange];
  progression[indexToChange] = '..';

  const questionProgressionString = progression.join(' ');
  const question = `Question: ${questionProgressionString}`;
  return [answer.toString(), question];
};

const description = 'What number is missing in the progression?';

export default () => runGame(description, generateRound);
