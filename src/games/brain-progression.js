import runGame from '../index.js';
import getRandomInt from '../utilities.js';

const MIN = {
  START: 5,
  LENGTH: 5,
  DIFF: 2,
};
const MAX = {
  START: 30,
  LENGTH: 10,
  DIFF: 10,
};

const generateProgression = (start, step, size) => {
  const result = [];
  for (let i = 0; i < size; i += 1) {
    const num = start + (i) * step;
    result.push(num);
  }
  return result;
};

const generateRound = () => {
  const size = getRandomInt(MIN.LENGTH, MAX.LENGTH);
  const firstNum = getRandomInt(MIN.START, MAX.START);
  const step = getRandomInt(MIN.DIFF, MAX.DIFF);

  const progression = generateProgression(firstNum, step, size);

  const indexToChange = getRandomInt(0, size - 1);
  const answer = progression.splice(indexToChange, 1, '..');

  const questionProgressionString = progression.join(' ');
  const question = `Question: ${questionProgressionString}`;
  return [answer.toString(), question];
};

const description = 'What number is missing in the progression?';

export default () => runGame(description, generateRound);
