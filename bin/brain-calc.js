#!/usr/bin/env node
import {
  intro,
  getRandomExpression,
  getAnswer,
  gameLoop,
} from '../src/index.js';

const name = intro('What is the result of the expression?');

for (let i = 0; i <= 4;) {
  i += gameLoop(getRandomExpression(), getAnswer(), name, i);
}
