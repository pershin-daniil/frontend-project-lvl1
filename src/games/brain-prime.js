import runGame from '../index.js';
import getRandomInt from '../utilities.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const question = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [answer, question];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

export default () => runGame(description, generateRound);
