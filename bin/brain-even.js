#!/usr/bin/env node
import {
  intro,
  isEvenRandom,
  getAnswer,
  compareResults,
  final,
} from '../src/index.js';

const name = intro('Answer "yes" if the number is even, otherwise answer "no".');

let i = 0;

while (i < 3) {
  // Task
  const correctAnswer = isEvenRandom();
  // Answer
  const userAnswer = getAnswer().toLowerCase();
  // Result
  i += compareResults(correctAnswer, userAnswer);
  if (i >= 3) final(correctAnswer, userAnswer, i, name);
}