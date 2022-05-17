import runGame from '../index.js';
import getRandomInt from '../utilities.js';

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const generateRound = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const operationsKeysArray = Object.keys(operations);
  const operation = operationsKeysArray[getRandomInt(0, operationsKeysArray.length - 1)];

  const answer = String(operations[operation](num1, num2));
  const question = `Question: ${num1} ${operation} ${num2}`;
  return [answer, question];
};

const description = 'What is the result of the expression?';

export default () => runGame(description, generateRound);
