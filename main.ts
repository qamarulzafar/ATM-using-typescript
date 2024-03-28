#! /usr/bin/env node
import inquirer from 'inquirer';

let currentAmount = 10000
const atmPin = 12435



console.log(`your current amount is ${currentAmount}`)
const reqPin = await inquirer.prompt([
    {
        name: "requiredPin",
        type: "number",
        message: "Enter your Pin"
    }
])

// cheack pin

if (reqPin.requiredPin === atmPin) {
    console.log("Your pin is correct")
    const paymentList = await inquirer.prompt([
        {
            name: "atmPaymentList",
            type: "list",
            message: "What do you Want",
            choices: ["Cheack Balance", "Withdraw"]

        }
    ])

    // Cheack currentbalance


    if (paymentList.atmPaymentList === "Cheack Balance") {
        console.log(`Your avilable balance is ${currentAmount}`)
    }

    // withdraw amount

    else {
        const withdrawAmount = await inquirer.prompt([
            {
                name: "withDrawMoney",
                type: "list",
                message: "How much amount do you want :",
                choices: ["1000", "5000", "10000", "Enter Cash"]

            }
        ])

        // withdraw

        if (currentAmount >= 1000 && withdrawAmount.withDrawMoney === "1000") {
            console.log(`1000 is dedected to your account and your current balance is ${currentAmount -= 1000}`)
        } else if (currentAmount >= 5000 && withdrawAmount.withDrawMoney === "5000") {
            console.log(`5000 is dedected to your account and your current balance is ${currentAmount -= 5000}`)
        } else if (currentAmount >= 10000 && withdrawAmount.withDrawMoney === "10000") {
            console.log(`10000 is dedected to your account and your current balance is ${currentAmount -= 10000}`)
        } else if (withdrawAmount.withDrawMoney === "Enter Cash") {
            const enterAmount = await inquirer.prompt([
                {
                    name: "enterAmountRequired",
                    type: "number",
                    message: "Enter amount as you want"
                }
            ])
            if (currentAmount >= enterAmount.enterAmountRequired) {
                console.log(`${enterAmount.enterAmountRequired} is dedected to your account and your current balance is ${currentAmount - enterAmount.enterAmountRequired}`)
            } else {
                console.log("error : You don't have as much amount in your account as you've entered.")
            }
        } else {
            console.log("error : You don't have as much amount in your account as you've entered.")

        }
    }
}
else {
    console.log("error : Your pin is not match ")
}


