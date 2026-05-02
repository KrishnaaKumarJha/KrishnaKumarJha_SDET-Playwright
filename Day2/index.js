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
