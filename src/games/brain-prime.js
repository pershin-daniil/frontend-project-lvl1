import { getIsPrimeTask, game } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

export default () => game(description, getIsPrimeTask);
