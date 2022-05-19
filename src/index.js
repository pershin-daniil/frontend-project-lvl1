import readlineSync from 'readline-sync';

const ROUND_COUNT = 3;

// MAIN GAME LOGIC
export default (description, getRound) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  console.log(description);

  for (let i = 0; i < ROUND_COUNT; i += 1) {
    const [correctAnswer, question] = getRound();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
