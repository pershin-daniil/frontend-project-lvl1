#!/usr/bin/env node
import {
  intro,
  gcd,
  getAnswer,
  compareResults,
  final,
} from '../src/index.js';

const name = intro('Find the greatest common divisor of given numbers.');

let i = 0;

while (i < 3) {
  // Task
  const correctAnswer = gcd();
  // Answer
  const userAnswer = getAnswer();
  // Result
  i += compareResults(correctAnswer, userAnswer);
  if (i >= 3) final(correctAnswer, userAnswer, i, name);
}
