#!/usr/bin/env node
import {
  intro,
  getExpressionTask,
  getAnswer,
  gameLoop,
} from '../src/index.js';

const name = intro('What is the result of the expression?');

for (let i = 0; i < 3;) {
  i = gameLoop(getExpressionTask(), getAnswer(), name, i);
}
