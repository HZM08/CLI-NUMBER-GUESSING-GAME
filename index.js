#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n \n \t \t .......WELCOME TO NUMBER GUESSING GAME.......  \t \t \n");
const randomNumber = Math.floor(Math.random() * 6 + 1);
// console.log(randomNumber);
const answer = await inquirer.prompt([
    {
        "name": "UserGuessedNumber",
        "type": "number",
        "message": "Try to guess a number between 1-6 : ",
    }
]);
if (answer.UserGuessedNumber === randomNumber) {
    console.log("CONGRAGULATIONS !!!!! You guessed right number.");
}
else if (answer.UserGuessedNumber < 1 || answer.UserGuessedNumber > 6) {
    console.log("!!! Kindly guess between 1-6 !!!");
}
else {
    console.log("SORRY !!!!!!! You guessed a wrong number.");
}
