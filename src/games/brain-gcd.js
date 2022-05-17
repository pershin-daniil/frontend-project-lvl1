import runGame from '../index.js';
import getRandomInt from '../utilities.js';

const findGCD = (x, y) => (y > 0 ? findGCD(y, x % y) : Math.abs(x));

const generateRound = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);

  const question = `Question: ${num1} ${num2}`;

  const answer = findGCD(num1, num2).toString();

  return [answer, question];
};

const description = 'Find the greatest common divisor of given numbers.';

export default () => runGame(description, generateRound);
