#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk",

async function wordCount(){
    let answers = await inquirer.prompt([
        {
            name: "Sentence",
            type: "input",
            message: chalk.greenBright.bold("Enter your sentence to count the words in it:")
        },
        {
            name: "Sentence1",
            type: "input",
            message: chalk.yellowBright.bold("Enter your sentence to chound the letters in it:")
        }
    ]);

    let words =answers.Sentence.trim().split(" ");

    console.log("\n", words);

    console.log(chalk.blueBright.bold(`\n Your sentence contains a total number of ${words.length} words.`));

    let letters = answers.Sentence1.replace(/\s/g, "").length

    console.log(chalk.greenBright.bold(`\n Your sentence consists of total ${letters} letters.`));
}
wordCount();