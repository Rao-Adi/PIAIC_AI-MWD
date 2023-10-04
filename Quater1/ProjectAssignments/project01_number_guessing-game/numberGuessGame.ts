import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function generateRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playGame() {
  const min = 1;
  const max = 100;
  const secretNumber = generateRandomNumber(min, max);
  let attempts = 0;

  console.log(`Welcome to the Number Guessing Game!`);
  console.log(`I'm thinking of a number between ${min} and ${max}.`);
  console.log(`Can you guess it?`);

  function askForGuess() {
    rl.question('Enter your guess: ', (input) => {
      const guess = parseInt(input, 10);

      if (isNaN(guess)) {
        console.log('Please enter a valid number.');
      } else {
        attempts++;

        if (guess === secretNumber) {
          console.log(`Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`);
          rl.close();
        } else if (guess < secretNumber) {
          console.log('Too low! Try again.');
          askForGuess();
        } else {
          console.log('Too high! Try again.');
          askForGuess();
        }
      }
    });
  }

  askForGuess();
}

playGame();
