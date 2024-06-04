#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// 1) computer will generate a guessing number : Done
// 2) user input for guessing number :Done
// 3) compare user input with computer generated number and show result :
// Print Wellcome Msg :
console.log("\n\t             <<<<==================================>>>>");
console.log("\t <<<<=====>>>>", chalk.blue("Wellcome to  ' NUMBER GUESSING GAME '"), "<<<<=====>>>>");
console.log("\t             <<<<===================================>>>>\n");
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: chalk.magenta(" >>>> Please Guess a number between 1 to 6 ===>"),
    },
]);
// if else statement :
if (answers.userGuessedNumber === randomNumber) {
    console.log(chalk.yellow("\n\tCongrajulations! you Guessed right number\n"));
}
else {
    console.log(chalk.red("\n\t>>>> Sorry, you Guessed wrong number :"));
}
