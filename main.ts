// {"name": "Vipin",

import chalk from "chalk";
import { log } from "console"

// "age": 21,

// "gender": "male",
// }

// JSON Data               
// "name" : "Ali"

// JSON Object
// {"name" : "Ali" , "age" : 2}

// JSON Array
["Ali" , "Mubashir" , "Zahid"]

// Accessing JSON Data
const detail = {"name" : "Rizwana" , "age" : 30}
console.log(detail. name);

console.log([detail.age]);
console.log(detail["age"]);

// Syntax error
// lett message = "hello world";
// console.log(message);

// Type error
//console.logerr(message);

// Assignablity error
// 2 message = 6 ;
//let num: number = "Pakistan";

// let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
//obj.foo();
//obj();
// obj.bar = 100;
// obj = "hello";
// const n: number = obj;

import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name : "age",
        type: "number",
        message: "Enter your age:",
    }
])
console.log(chalk.bgBlackBright(answer.age));