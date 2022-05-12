#!/usr/bin/env node
import {
  intro,
  getAnswer,
  gameLoop,
  getIsPrimeTask,
} from '../src/index.js';

const name = intro('Answer "yes" if given number is prime. Otherwise answer "no"');

for (let i = 0; i < 3;) {
  i = gameLoop(getIsPrimeTask(), getAnswer(), name, i);
}
