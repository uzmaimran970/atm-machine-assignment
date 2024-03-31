#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 1234;
const amountChoices = [1000, 2000, 3000, 4000, 5000]; //pre defined amount choices
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin number",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!!!");
}
else {
    console.log("incorrect pin number");
}
let operationAns = await inquirer.prompt([
    {
        name: "operation",
        message: "'please select option",
        type: "list",
        choices: ["withdraw", "check balance"]
    }
]);
if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "enter your amount",
            type: "number"
        }
    ]);
}
// amount choices
if (operationAns.operation === "withdraw") {
    const amountAns = await inquirer.prompt([
        {
            name: "amount",
            message: "select any amount",
            type: "list",
            choices: amountChoices
        }
    ]);
    if (amountAns.amount > myBalance) {
        console.log("insufficiant balance");
    }
    else {
        myBalance -= amountAns.amount;
        console.log("your remaining balnce is " + myBalance);
    }
}
else if (operationAns.operation === "check balance") {
    console.log(`"your balnce is" + ${myBalance}`);
}
// }
else {
    console.log("incorrect pin number");
}
