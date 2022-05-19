import runGame from '../index.js';
import getRandomInt from '../utilities.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const findGCD = (x, y) => (y > 0 ? findGCD(y, x % y) : Math.abs(x));

const generateRound = () => {
  const num2 = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const num1 = getRandomInt(MIN_NUMBER, MAX_NUMBER);

  const question = `${num1} ${num2}`;

  const answer = findGCD(num1, num2).toString();

  return [answer, question];
};

const description = 'Find the greatest common divisor of given numbers.';

export default () => runGame(description, generateRound);
