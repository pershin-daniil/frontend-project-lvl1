import { getExpressionTask, game } from '../index.js';

const description = 'What is the result of the expression?';

export default () => game(description, getExpressionTask);
