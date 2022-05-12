import readlineSync from 'readline-sync';
import greeting from './cli.js';

const ROUND_COUNT = 3;

// Other funtions and one special array
export const getRandomNum = (max = 100) => Math.floor(Math.random() * max);

const createArray = () => {
  // Size from min 6 to max 11 = index from 0 to 10
  const size = 6 + getRandomNum(6);
  const sequenceOfNumbers = [getRandomNum(100)];
  // Range sould be from 1 to any
  const step = getRandomNum(20) + 1;
  // Progression formula (from 1 to i): a[i] = a[1] + (i - 1)d
  for (let i = 2; i < size; i += 1) {
    const firstNum = sequenceOfNumbers[0];
    const nextNum = firstNum + (i - 1) * step;
    sequenceOfNumbers.push(nextNum);
  }
  return sequenceOfNumbers;
};

// eslint-disable-next-line max-len
const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

// Games show the question and then return correct answer.
export const getIsEvenTask = () => {
  const currentNum = getRandomNum(100);
  const taskQuestion = `Question: ${currentNum}`;
  if (currentNum % 2 === 0) {
    return ['yes', taskQuestion];
  }
  return ['no', taskQuestion];
};

export const getExpressionTask = () => {
  const operators = ['+', '-', '*'];
  const currentOperator = operators[getRandomNum(3)];
  const num1 = getRandomNum(100);
  const num2 = getRandomNum(100);
  const taskQuestion = `Question: ${num1} ${currentOperator} ${num2}`;
  const indexOfOperator = operators.indexOf(currentOperator);
  if (indexOfOperator === 0) {
    return [num1 + num2, taskQuestion];
  }
  if (indexOfOperator === 1) {
    return [num1 - num2, taskQuestion];
  }
  if (indexOfOperator === 2) {
    return [num1 * num2, taskQuestion];
  }
  return null;
};

export const getGCDTask = () => {
  let a = getRandomNum(100);
  let b = getRandomNum(100);

  const taskQuestion = `Question: ${a} ${b}`;

  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return [a + b, taskQuestion];
};

export const getProgressionTask = () => {
  const progression = createArray();
  const size = progression.length;
  const indexToChange = getRandomNum(size);
  const correctAnswer = progression[indexToChange];
  const progressionForQuestion = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const num of progression) {
    if (num === correctAnswer) progressionForQuestion.push('..');
    if (num !== correctAnswer) progressionForQuestion.push(num);
  }
  const questionProgressionString = progressionForQuestion.join(' ');
  const taskQuestion = `Question: ${questionProgressionString}`;
  return [correctAnswer, taskQuestion];
};

export const getIsPrimeTask = () => {
  const currentNum = getRandomNum(100);
  const taskQuestion = `Question: ${currentNum}`;
  if (primeNumbers.includes(currentNum)) {
    return ['yes', taskQuestion];
  }
  return ['no', taskQuestion];
};

export const getAnswer = () => readlineSync.question('Your answer: ');

// MAIN GAME LOGIC
export const game = (description, task) => {
  const name = greeting();

  console.log(description);

  let i;
  let userAnswer;

  for (i = 0; i < ROUND_COUNT; i += 1) {
    const [correctAnswer, taskQuestion] = task();
    console.log(taskQuestion);

    userAnswer = getAnswer();

    if (String(correctAnswer) === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
