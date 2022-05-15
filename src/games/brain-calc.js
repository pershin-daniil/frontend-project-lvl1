import runGame from '../index.js';
import getRandomInt from '../utilities.js';

const operators = ['+', '-', '*'];

const getExpressionTask = () => {
  const currentOperator = operators[getRandomInt(0, operators.length - 1)];
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);
  const question = `Question: ${num1} ${currentOperator} ${num2}`;
  const indexOfOperator = operators.indexOf(currentOperator);
  if (indexOfOperator === 0) {
    return [String(num1 + num2), question];
  }
  if (indexOfOperator === 1) {
    return [String(num1 - num2), question];
  }
  if (indexOfOperator === 2) {
    return [String(num1 * num2), question];
  }
  return null;
};

const description = 'What is the result of the expression?';

export default () => runGame(description, getExpressionTask);
