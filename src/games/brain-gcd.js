import runGame from '../index.js';
import getRandomInt from '../utilities.js';

const findGCD = (num1, num2) => {
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      // eslint-disable-next-line no-param-reassign
      num1 %= num2;
    } else {
      // eslint-disable-next-line no-param-reassign
      num2 %= num1;
    }
  }
  return String(num1 + num2);
};

const getGCDTask = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);

  const question = `Question: ${num1} ${num2}`;

  const correctAnswer = findGCD(num1, num2);

  return [correctAnswer, question];
};

const description = 'Find the greatest common divisor of given numbers.';

export default () => runGame(description, getGCDTask);
