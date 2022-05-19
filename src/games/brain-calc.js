import runGame from '../index.js';
import getRandomInt from '../utilities.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const generateRound = () => {
  const num1 = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const num2 = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const keys = Object.keys(operations);
  const operation = keys[getRandomInt(0, keys.length - 1)];

  const answer = String(operations[operation](num1, num2));
  const question = `${num1} ${operation} ${num2}`;
  return [answer, question];
};

const description = 'What is the result of the expression?';

export default () => runGame(description, generateRound);
