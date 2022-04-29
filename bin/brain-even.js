#!/usr/bin/env node
import {
  intro,
  getIsEvenTask,
  getAnswer,
  gameLoop,
} from '../src/index.js';

const name = intro('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3;) {
  i = gameLoop(getIsEvenTask(), getAnswer(), name, i);
}
