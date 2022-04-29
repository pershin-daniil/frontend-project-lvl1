#!/usr/bin/env node
import {
  intro,
  getAnswer,
  gameLoop,
  getProgressionTask,
} from '../../src/index.js';

const name = intro('What number is missing in the progression?');

for (let i = 0; i < 3;) {
  i = gameLoop(getProgressionTask(), getAnswer(), name, i);
}
