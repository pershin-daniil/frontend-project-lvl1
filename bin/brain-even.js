#!/usr/bin/env node
import {
  intro,
  isEvenRandom,
  getAnswer,
  gameLoop,
} from '../src/index.js';

const name = intro('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i <= 4;) {
  i += gameLoop(isEvenRandom(), getAnswer(), name, i);
}
