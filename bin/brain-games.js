#!/usr/bin/env node
import greeting from '../src/cli.js';
import evenGame from './brain-even.js';

console.log('Welcome to the Brain Games!');

let name = '';
name = greeting();
evenGame(name);
