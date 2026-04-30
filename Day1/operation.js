let a = 10;
let b = 3;

let str = "Hello! World";

//Mathematical Operations
console.log(a + b); // 13  (Addition)
console.log(a - b); // 7   (Subtraction)
console.log(a * b); // 30  (Multiplication)
console.log(a / b); // 3.33 (Division)
console.log(a % b); // 1   (Modulus - remainder)

console.log();

//Logical Operations
console.log(5 > 3);   // true
console.log(5 < 3);   // false
console.log(5 == "5");  // true (loose check)
console.log(5 === "5"); // false (strict check)
console.log(5 != 3);  // true

console.log();

//String Operations
console.log(str.length);     // 6
console.log(str.toUpperCase()); // HELLO! WORLD
console.log(str.toLowerCase()); // hello! world
console.log(str.substring(0,5)); //Hello

let str2 = "Hello";
str = 5;

console.log("str:", str);

function add(a, b) {
    console.log( a + b);
}

add(7,8);