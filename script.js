import fs from 'fs';
import dotenv from 'dotenv';
import readlineSync from 'readline-sync';
import chalk from 'chalk';

const requiredEnvVariables = ['DATABASE_URL', 'JWT_SECRET'];

console.log(chalk.magenta('Please enter superuser login and password.'));

const login = readlineSync.question(chalk.blue('Login: '));

// Using readlineSync.question to hide the password input
const password = readlineSync.question(chalk.blue('Password: '), {
  hideEchoBack: true, // The typed text on screen is hidden by `*` (default).
});

const repeatPassword = readlineSync.question(chalk.blue('Repeat Password: '), {
  hideEchoBack: true,
});

if (password !== repeatPassword) {
  console.log(chalk.red('Passwords do not match.'));
  process.exit(1); // Exit with error
}

// Here, you would add your own authentication logic
console.log(chalk.green(`Received login: ${login}, password is hidden for security reasons.`));

if (!fs.existsSync('.env')) {
  console.error(chalk.red('Error: .env file does not exist.'));
  process.exit(1); // Exit with error
}

const envConfig = dotenv.config();

if (envConfig.error) {
  console.error(chalk.red('Error loading .env file.'));
  process.exit(1); // Exit with error
}

console.log(chalk.yellow('.env file found.'));

const missingVariables = requiredEnvVariables.filter((varName) => !(varName in process.env));

if (missingVariables.length > 0) {
  console.error(chalk.red(`Error: Missing required environment variables: ${missingVariables.join(', ')}`));
  process.exit(1); // Exit with error
}

console.log(chalk.green('All .env variables verified and loaded successfully.'));

console.log(chalk.cyan('Happy teaching! :)'));
