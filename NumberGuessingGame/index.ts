#! /usr/bin/env node

import inquirer from "inquirer";
let score:number=0;
let randomNumber: number=0;
let repeat=true;
while (repeat==true) 
{
randomNumber=Math.floor(Math.random()*6+1) ;
console.log("\nStart Game");

let answers = await inquirer.prompt([{name:"userGuessNumber",type:"number",message:"Guess the number generated by computer : "}
]);



if (answers.userGuessNumber ==randomNumber)
{
    score=score+10;
    console.log("Congradulation! : You Guess the Right Number Generated By Computer ");
}
else
console.log("Oops! I /'m sorry. You Guess the Wrong Number : "+answers.userGuessNumber+" Computer Generated Number is : "+randomNumber);
console.log(" Your Score Is : "+score);

let ans = await inquirer.prompt([{name:"isContinue",type:"confirm",message:"Do You Want to Contine ...... (y/n): ",
default:"true"}
]);
repeat=ans.isContinue;
} 