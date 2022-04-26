#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from '../src/cli.js';

const isEven = (num) => num % 2 === 0;
const name = greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let i = 0;
while (i < 3) {
  // Nothing said about range so that I use range from 0 to 99
  const numberToAsk = Math.floor(Math.random() * 100);
  console.log(`Question: ${numberToAsk}`);
  const answer = readlineSync.question('Your answer: ');
  let gameResult;
  let correctAnswer;
  if (isEven(numberToAsk)) {
    gameResult = (answer.toLowerCase() === 'yes') ? 1 : 0;
    correctAnswer = 'yes';
  } else {
    gameResult = (answer.toLowerCase() === 'no') ? 1 : 0;
    correctAnswer = 'no';
  }

  if (gameResult === 1) {
    console.log('Correct!');
    i += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    // i = 0;
    break;
  }
}
if (i === 3) { console.log(`Congratulations, ${name}!`); }
