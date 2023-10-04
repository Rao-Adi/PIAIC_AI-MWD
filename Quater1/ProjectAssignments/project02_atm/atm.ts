import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Simulated user data (for demonstration purposes)
const users: { id: string; pin: string; balance: number }[] = [
  { id: '123456', pin: '1234', balance: 1000 },
  { id: '987654', pin: '4321', balance: 1500 },
  // Add more users if needed
];

let currentUser: { id: string; pin: string; balance: number } | null = null;

function displayMainMenu() {
  console.log('Welcome to the ATM');
  console.log('1. Log in');
  console.log('2. Exit');
}

function displayUserMenu() {
  console.log('ATM Menu');
  console.log('1. Check Balance');
  console.log('2. Withdraw Money');
  console.log('3. Deposit Money');
  console.log('4. Log Out');
}

function login() {
  rl.question('Enter User ID: ', (userId) => {
    rl.question('Enter PIN: ', (pin) => {
      const user = users.find((u) => u.id === userId && u.pin === pin);
      if (user) {
        currentUser = user;
        console.log(`Welcome, User ID: ${currentUser.id}`);
        displayUserMenu();
        userMenu();
      } else {
        console.log('Invalid User ID or PIN. Please try again.');
        displayMainMenu();
        mainMenu();
      }
    });
  });
}

function userMenu() {
  rl.question('Select an option: ', (option) => {
    switch (option) {
      case '1':
        console.log(`Your balance: $${currentUser!.balance}`);
        break;
      case '2':
        rl.question('Enter the amount to withdraw: $', (amount) => {
          const withdrawAmount = parseFloat(amount);
          if (!isNaN(withdrawAmount) && withdrawAmount > 0 && withdrawAmount <= currentUser!.balance) {
            currentUser!.balance -= withdrawAmount;
            console.log(`Withdrawn $${withdrawAmount}`);
            console.log(`Remaining balance: $${currentUser!.balance}`);
          } else {
            console.log('Invalid amount or insufficient balance.');
          }
          displayUserMenu();
          userMenu();
        });
        break;
      case '3':
        rl.question('Enter the amount to deposit: $', (amount) => {
          const depositAmount = parseFloat(amount);
          if (!isNaN(depositAmount) && depositAmount > 0) {
            currentUser!.balance += depositAmount;
            console.log(`Deposited $${depositAmount}`);
            console.log(`New balance: $${currentUser!.balance}`);
          } else {
            console.log('Invalid amount.');
          }
          displayUserMenu();
          userMenu();
        });
        break;
      case '4':
        currentUser = null;
        displayMainMenu();
        mainMenu();
        break;
      default:
        console.log('Invalid option.');
        displayUserMenu();
        userMenu();
        break;
    }
  });
}

function mainMenu() {
  rl.question('Select an option: ', (option) => {
    switch (option) {
      case '1':
        login();
        break;
      case '2':
        console.log('Goodbye!');
        rl.close();
        break;
      default:
        console.log('Invalid option.');
        displayMainMenu();
        mainMenu();
        break;
    }
  });
}

// Start the ATM application
displayMainMenu();
mainMenu();
