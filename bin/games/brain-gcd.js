#!/usr/bin/env node
import {
  intro,
  getAnswer,
  gameLoop,
  getGCDTask,
} from '../../src/index.js';

const name = intro('Find the greatest common divisor of given numbers.');

for (let i = 0; i < 3;) {
  i = gameLoop(getGCDTask(), getAnswer(), name, i);
}
