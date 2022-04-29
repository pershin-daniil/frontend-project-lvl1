#!/usr/bin/env node
import {
  intro,
  getAnswer,
  gameLoop,
  gcd,
} from '../src/index.js';

const name = intro('Find the greatest common divisor of given numbers.');

for (let i = 0; i <= 4;) {
  i += gameLoop(gcd(), getAnswer(), name, i);
}
