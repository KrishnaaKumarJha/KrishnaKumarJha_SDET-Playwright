// default parameter

function welcome(name = "Guest") {
    console.log(`Welcome ${name}!`);
}

welcome("Krishna")
welcome("Rahul")
welcome()

// spread operator
const nums = [1, 2, 3, 4, 5];
const newNums = [...nums, 6, 7, 8];
console.log(newNums);

const obj = {name: "Krishna"};
const updatedObj = {...obj, age: 25};
console.log(updatedObj);


// rest operator & rest parameters
const cal = {
    sum: (...nums) => nums.reduce((a, b) => a + b, 0),
}

console.log(cal.sum(1, 2, 43, 4))


// destructuring

//position based
const [first, second, third, fourth, fifth] = ["Krishna","Hello!","Hi","Welcome","Hello World!"];
const [one, two, ...three] = [1, 3, 5, 6, 7];
console.log(first, second, third, fourth, fifth);
console.log(one, two, three)

//key-based
const { name, age } = {name: "Krishna", age: 23};
console.log(name, age);