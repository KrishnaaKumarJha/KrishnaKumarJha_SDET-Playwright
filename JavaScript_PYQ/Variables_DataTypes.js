/*--------------------Variables & Data Types------------------------------------------------------*/

//Q1-Create a program that swaps two numbers without using a third variable.
let a = 1;
let b = 2;
console.log(`Before swapping a: ${a} and b: ${b}`);
[a,b] = [b,a];
console.log(`After swapping a: ${a} and b: ${b}`);


//Q2-Write a program to check whether a given value is a number, string, boolean, null, orundefined.
let c = "Hello";
function typeCheck(input){
    console.log(`${input} Is of Data_Type: ${typeof(input)}`);
};
typeCheck(a);
typeCheck(c);


//Q3-Convert temperature from Celsius to Fahrenheit using variables.
let celcius = 32;
console.log(`Temperature in Fahrenheit: ${(celcius*1.8) + 32}`);


//Q4-Create a simple calculator using variables and arithmetic operators.
function calc(a,b,operation){
    console.log("Performing Calculations");
    if(operation == "+"){
        console.log(`${a} ${operation} ${b} = ${a+b}`);
    }else if(operation == "-"){
        console.log(`${a} ${operation} ${b} = ${a-b}`);
    }else if(operation == "*"){
        console.log(`${a} ${operation} ${b} = ${a*b}`);
    }else if(operation == "/"){
        console.log(`${a} ${operation} ${b} = ${a/b}`);
    }else if(operation == "%"){
        console.log(`${a} ${operation} ${b} = ${a%b}`);
    }
}
calc(5,5,"+");
calc(9,5,"-");
calc(5,5,"*");
calc(25,5,"/");
calc(9,2,"%");


//Q5-Write a program that takes a user’s birth year and calculates age.
function ageCalculator(birth){
    const currentYear = new Date().getFullYear();
    const age = currentYear - birth;
    console.log(`You are ${age} years old.`);
}
ageCalculator("2003");
ageCalculator("2001");
ageCalculator("1995");