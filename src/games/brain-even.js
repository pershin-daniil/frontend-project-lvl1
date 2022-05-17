import runGame from '../index.js';
import getRandomInt from '../utilities.js';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const num = getRandomInt(1, 100);
  const question = `Question: ${num}`;
  const answer = isEven(num) ? 'yes' : 'no';
  return [answer, question];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => runGame(description, generateRound);
