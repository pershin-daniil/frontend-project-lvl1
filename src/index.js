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
  console.log(`Question: ${currentNum}`);
  if (currentNum % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export const getExpressionTask = () => {
  const operators = ['+', '-', '*'];
  const currentOperator = operators[getRandomNum(3)];
  const num1 = getRandomNum(100);
  const num2 = getRandomNum(100);
  console.log(`Question: ${num1} ${currentOperator} ${num2}`);
  const indexOfOperator = operators.indexOf(currentOperator);
  if (indexOfOperator === 0) {
    return num1 + num2;
  }
  if (indexOfOperator === 1) {
    return num1 - num2;
  }
  if (indexOfOperator === 2) {
    return num1 * num2;
  }
  return null;
};

export const getGCDTask = () => {
  let a = getRandomNum(100);
  let b = getRandomNum(100);

  console.log(`Question: ${a} ${b}`);

  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
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
  console.log(`Question: ${questionProgressionString}`);
  return correctAnswer;
};

export const getIsPrimeTask = () => {
  const currentNum = getRandomNum(100);
  console.log(`Question: ${currentNum}`);
  if (primeNumbers.includes(currentNum)) {
    return 'yes';
  }
  return 'no';
};

// Game interface
export const intro = (description) => {
  const name = greeting();
  console.log(description);
  return name;
};

export const getAnswer = () => readlineSync.question('Your answer: ');

export const compareResults = (correctAnswer, userAnswer) => {
  if (String(correctAnswer) === userAnswer) {
    console.log('Correct!');
    return 1;
  }
  return 4;
};

export const final = (correctAnswer, userAnswer, counter, userName) => {
  if (counter === 3) {
    return console.log(`Congratulations, ${userName}!`);
  }
  return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
};

// Main game function which is divided into three pieces such as task, answer and compare result
// function with additional variables such as "name" and counter "i"
const gameLoop = (task, answer, name, i) => {
  const correctAnswer = task;
  const userAnswer = answer;
  const currentResult = compareResults(correctAnswer, userAnswer) + i;
  if (currentResult >= 3) {
    return final(correctAnswer, userAnswer, currentResult, name);
  }
  return currentResult;
};

// GAMES
export const gameEven = () => {
  const name = intro('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < ROUND_COUNT;) {
    i = gameLoop(getIsEvenTask(), getAnswer(), name, i);
  }
};

export const gameGcd = () => {
  const name = intro('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < ROUND_COUNT;) {
    i = gameLoop(getGCDTask(), getAnswer(), name, i);
  }
};

export const gamePrime = () => {
  const name = intro('Answer "yes" if given number is prime. Otherwise answer "no"');

  for (let i = 0; i < 3;) {
    i = gameLoop(getIsPrimeTask(), getAnswer(), name, i);
  }
};

export const gameProgression = () => {
  const name = intro('What number is missing in the progression?');

  for (let i = 0; i < 3;) {
    i = gameLoop(getProgressionTask(), getAnswer(), name, i);
  }
};
