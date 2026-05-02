//Template literals
let a = "Krishna";
let b = "Rahul";

console.log(`Hello ${a} and ${b}`);
console.log(`The length of ${a} is ${a.length}`);


//Functions & Arrow Functions
function table(a){
    for(let i = 1; i <= 10; i++){
        console.log(`${a} X ${i} = ${a * i}`);
    }
}
table(7);

let sum = (x, y) => x + y;
console.log("Sum of 5 and 10:", sum(5, 14));

//Array Functions(filter,map,find and forEach)
let arr = [1,2,3,4,5,"Hello","Krishna"];

//find
console.log(arr.find(x => x === "Krishna"));

//filter and print each element multiplied by 2
arr.filter(x => typeof x === "number").map(x => x * 2).forEach(x => console.log(`Elements after multiplied by * 2 ${x}`));

// Random number between 10 and 60
console.log(Math.floor(Math.random() * 51) + 10);

// Floor and Ceil
let decimalVal = 3.7;
console.log(Math.floor(decimalVal));
console.log(Math.ceil(decimalVal));

// Type conversions
let strValue = "8";
console.log(Number(strValue));
console.log(String(12));

let deciVal = "3.7";
console.log(parseInt(deciVal));
console.log(parseFloat(deciVal));

// Array operations
let fruits = ["apple", "banana", "mango"];

console.log(fruits.indexOf("orange"));
console.log(fruits.includes("orange"));
console.log(fruits.length);
console.log(fruits[3]);
console.log(fruits[fruits.length - 1]);

fruits.push("orange");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift("grapes");
console.log(fruits);

fruits.shift();
console.log(fruits);