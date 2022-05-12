import { getGCDTask, game } from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

export default () => game(description, getGCDTask);
