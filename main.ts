import inquirer from "inquirer";
let exit = false
while (!exit) {
let userAnswer = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Please enter First Number",
},
{
    name: "num2",
    type: "number",
    message: "Please enter Second Number",
},
{
    name: "operators",
    type: "list",
    choices: ["+", "-", "*", "/", "Quit"],
    message: "Which operation do you want to perform?",
},
])
if (userAnswer.operators=="+") {console.log(userAnswer.num1+userAnswer.num2)}
else if (userAnswer.operators=="-") {console.log(userAnswer.num1-userAnswer.num2)}
else if (userAnswer.operators=="*") {console.log(userAnswer.num1*userAnswer.num2)}
else if (userAnswer.operators=="/") {console.log(userAnswer.num1/userAnswer.num2)}
else {exit = true, console.log("Thank you for using my calculator")}}