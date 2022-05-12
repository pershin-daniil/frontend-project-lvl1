import { getIsEvenTask, game } from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => game(description, getIsEvenTask);
