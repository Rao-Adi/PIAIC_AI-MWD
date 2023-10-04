import axios from 'axios';
import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function convertCurrency() {
  try {
    const { amount, fromCurrency, toCurrency } = await promptForConversionData();

    const exchangeRate = await getExchangeRate(fromCurrency, toCurrency);

    if (exchangeRate !== null) {
      const convertedAmount = amount * exchangeRate;
      console.log(`${amount} ${fromCurrency} equals ${convertedAmount.toFixed(2)} ${toCurrency}`);
    } else {
      console.log(`Error: Unable to fetch exchange rate data.`);
    }
  } catch (error:any) {
    console.error('An error occurred:', error.message);
  } finally {
    rl.close();
  }
}

async function promptForConversionData(): Promise<{
  amount: number;
  fromCurrency: string;
  toCurrency: string;
}> {
  return new Promise((resolve) => {
    rl.question('Enter the amount: ', (amount) => {
      rl.question('Enter the source currency (e.g., USD): ', (fromCurrency) => {
        rl.question('Enter the target currency (e.g., EUR): ', (toCurrency) => {
          resolve({
            amount: parseFloat(amount),
            fromCurrency: fromCurrency.toUpperCase(),
            toCurrency: toCurrency.toUpperCase(),
          });
        });
      });
    });
  });
}

async function getExchangeRate(fromCurrency: string, toCurrency: string): Promise<number | null> {
  try {
    const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const data = response.data;

    if (data.rates[toCurrency]) {
      return data.rates[toCurrency];
    } else {
      return null;
    }
  } catch (error) {
    throw new Error('Unable to fetch exchange rate data.');
  }
}

convertCurrency();
