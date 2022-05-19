import runGame from '../index.js';
import getRandomInt from '../utilities.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const question = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const answer = isEven(question) ? 'yes' : 'no';
  return [answer, question];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => runGame(description, generateRound);
