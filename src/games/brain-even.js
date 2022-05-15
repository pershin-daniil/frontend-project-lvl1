import runGame from '../index.js';
import getRandomInt from '../utilities.js';

const isEven = (num) => num % 2 === 0;

const getIsEvenTask = () => {
  const currentNum = getRandomInt(1, 100);
  const question = `Question: ${currentNum}`;
  return isEven(currentNum) ? ['yes', question] : ['no', question];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => runGame(description, getIsEvenTask);
