import * as inquirer from 'inquirer';
import { createPromptModule } from 'inquirer';

const prompt = createPromptModule();

function calculator() {
  const questions = [
    {
      type: 'list',
      name: 'operation',
      message: 'Select an operation:',
      choices: ['Add', 'Subtract', 'Multiply', 'Divide', 'Quit'],
    },
    {
      type: 'input',
      name: 'num1',
      message: 'Enter the first number:',
      when: (answers) => answers.operation !== 'Quit',
      validate: (value) => !isNaN(Number(value)),
    },
    {
      type: 'input',
      name: 'num2',
      message: 'Enter the second number:',
      when: (answers) => answers.operation !== 'Quit',
      validate: (value) => !isNaN(Number(value)),
    },
  ];

  prompt(questions).then((answers: any) => {
    if (answers.operation === 'Quit') {
      console.log('Goodbye!');
      return;
    }

    const num1 = parseFloat(answers.num1);
    const num2 = parseFloat(answers.num2);

    switch (answers.operation) {
      case 'Add':
        console.log(`Result: ${num1 + num2}`);
        break;
      case 'Subtract':
        console.log(`Result: ${num1 - num2}`);
        break;
      case 'Multiply':
        console.log(`Result: ${num1 * num2}`);
        break;
      case 'Divide':
        if (num2 === 0) {
          console.log('Error: Division by zero');
        } else {
          console.log(`Result: ${num1 / num2}`);
        }
        break;
      default:
        console.log('Invalid operation');
    }

    calculator();
  });
}

calculator();
