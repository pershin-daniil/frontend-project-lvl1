#!/usr/bin/env node
import {
  intro,
  getRandomExpression,
  getAnswer,
  compareResults,
  final,
} from '../src/index.js';

const name = intro('What is the result of the expression?');

let i = 0;

while (i < 3) {
  // Task
  const correctAnswer = getRandomExpression();
  // Answer
  const userAnswer = getAnswer();
  // Result
  i += compareResults(correctAnswer, userAnswer);
  if (i >= 3) final(correctAnswer, userAnswer, i, name);
}
