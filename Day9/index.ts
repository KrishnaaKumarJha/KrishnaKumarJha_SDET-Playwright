let x: number = 10;
console.log(x,typeof(x));

//Multiple Ways to define a variable
let a: number | string;

a = 12;
console.log(`Valuse of a as a number: ${a}`);

a = "Krishna";
console.log(`Valuse of a as a String: ${a}`);

//Creating a function with defined variable type
function add (a: number, b: number): number{
    return a+b;
};
console.log(add(7,7));