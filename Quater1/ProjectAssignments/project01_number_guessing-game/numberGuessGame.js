"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function playGame() {
    var min = 1;
    var max = 100;
    var secretNumber = generateRandomNumber(min, max);
    var attempts = 0;
    console.log("Welcome to the Number Guessing Game!");
    console.log("I'm thinking of a number between ".concat(min, " and ").concat(max, "."));
    console.log("Can you guess it?");
    function askForGuess() {
        rl.question('Enter your guess: ', function (input) {
            var guess = parseInt(input, 10);
            if (isNaN(guess)) {
                console.log('Please enter a valid number.');
            }
            else {
                attempts++;
                if (guess === secretNumber) {
                    console.log("Congratulations! You guessed the number ".concat(secretNumber, " in ").concat(attempts, " attempts."));
                    rl.close();
                }
                else if (guess < secretNumber) {
                    console.log('Too low! Try again.');
                    askForGuess();
                }
                else {
                    console.log('Too high! Try again.');
                    askForGuess();
                }
            }
        });
    }
    askForGuess();
}
playGame();
