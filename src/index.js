import readlineSync from 'readline-sync';
import greeting from './cli.js';

// Math funtions
export const getRandomNum = (max = 100) => Math.floor(Math.random() * max);

// Games show the question and then return correct answer.
export const isEvenRandom = () => {
  const currentNum = getRandomNum(100);
  console.log(`Question: ${currentNum}`);
  if (currentNum % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export const getRandomExpression = () => {
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

export const gcd = () => {
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
