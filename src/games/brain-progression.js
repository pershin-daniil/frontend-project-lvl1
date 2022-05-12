import { getProgressionTask, game } from '../index.js';

const description = 'What number is missing in the progression?';

export default () => game(description, getProgressionTask);
