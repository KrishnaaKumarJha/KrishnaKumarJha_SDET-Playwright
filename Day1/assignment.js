//1.The Swapper: Create two variables, a and b, and assign them numbers. Write a few lines of code to swap their values so that a gets b's value and vice-versa.
let a = 1;
let b = 2;
console.log("Values before swap",a,b);

let temp = b;
b = a;
a = temp;
console.log("Values after swap",a,b);

//2.Type Checker: Write a function that takes one input and console.log's a message saying "This is a number" or "This is a string" based on the data type provided.
function typeChecker(input) {
    console.log(input, "is of type:", typeof input);
}

typeChecker(10);
typeChecker(true);
typeChecker("Hello");

//3.Initials Creator: Given a variable let fullName = "John Doe", write code to extract the first letter of the first name and the first letter of the last name to create the string "JD".
let Name = "John Doe";

let substr = Name.split(" ");

console.log("Initials are :" ,substr[0][0] + substr[1][0]); // JD

//4.The Cleaner: Given the string let messy = " Javascript is fun ", write a single line of code that removes the extra spaces at the start/end and changes all the letters to lowercase.
let messy = " Javascript is fun ";

let clean = messy.trim().toLowerCase();
console.log("Cleaned text:",clean);

//5.The Grocery List: Create an array called cart with three items. Write code to add "Milk" to the end, "Eggs" to the beginning, and then remove the very last item you just added.
let cart = ["Bread","Flour","Water"];
console.log("Original Array:",cart);

cart.push("Milk");
cart.unshift("Eggs");
console.log("Array after addition:",cart);

cart.pop();
console.log("Array after deletion:",cart);

//6.Given let numbers = [10, 20, 30, 40, 50], write a line of code that checks if the number 30 exists in the array (returning true or false) and another line to find the index of the number 50.
let numbers = [10, 20, 30, 40, 50];
console.log("Numbers Array:",numbers);

function exists(numbers){
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] == 30){
            console.log("exists at:", i);
            return true;
        }
    }
    return false;
}

console.log(exists([10, 20, 30, 40, 50]));

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] == 50){
        console.log("50 exists at:",i);
    }
}