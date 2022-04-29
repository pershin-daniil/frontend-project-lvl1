import readlineSync from 'readline-sync';
import greeting from './cli.js';

// Other funtions
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
export const gameLoop = (task, answer, name, i) => {
  const correctAnswer = task;
  const userAnswer = answer;
  const currentResult = compareResults(correctAnswer, userAnswer) + i;
  if (currentResult >= 3) {
    return final(correctAnswer, userAnswer, currentResult, name);
  }
  return currentResult;
};
