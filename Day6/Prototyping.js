function person(name) {
    this.name = name;
}

person.prototype.sayHi = function() {
    console.log('hello ' + this.name);
}

const me = new person("Krishna");
const you = new person("Everyone");

me.sayHi();
you.sayHi();

console.log(Object.getPrototypeOf(me) === person.prototype)
console.log(me.sayHi === you.sayHi) 


//callback function
function greetUser(name, callback) {
    console.log('Hello ' + name);
    callback();
}
 
function sayGoodbye() {
    console.log('Goodbye!');
}
 
greetUser('Aryan', sayGoodbye);
 
function doforeach(e) {
    console.log(e);
}
 
const doeach = e => console.log(e);
[1, 2, 3].forEach(doeach); // callback | forEach is a higher order function (HOF)
[1, 2, 3].forEach(e => console.log(e)); // anonymous callback