import runGame from '../index.js';
import getRandomInt from '../utilities.js';

// eslint-disable-next-line max-len
const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

const isPrime = (num) => primeNumbers.includes(num);

const getIsPrimeTask = () => {
  const currentNum = getRandomInt(1, 100);
  const question = `Question: ${currentNum}`;
  if (isPrime(currentNum)) {
    return ['yes', question];
  }
  return ['no', question];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

export default () => runGame(description, getIsPrimeTask);
