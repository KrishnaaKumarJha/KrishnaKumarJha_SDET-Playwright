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

//interfaces and optional properties
interface Person {
    id: number;
    name: string;
    age: number;
    role: Role; // using enum for role
    isAdmin?: boolean; // optional property ?
}

interface Person {
    email: string; // merge interface to add email property
}

//enum
enum Role {
    User = "USER",
    Admin = "ADMIN",
    SuperAdmin = "SUPER_ADMIN"
} // USER, user, User, ADMIN, Admin, admin, SUPER_ADMIN, SuperAdmin, superAdmin

const user: Person = {
    id: 1,
    name: "Aaryan",
    age: 25,
    role: Role.User,
    email: "aaryan@gmail.com"
};

const admin: Person = {
    id: 2,
    name: "Arush",
    age: 30,
    email: "arush@gmail.com",
    role: Role.Admin,
    isAdmin: true
};

console.log(user, admin);

//Tuples in TypeScript
let coordinates: [number, string] = [40.7128, "-74.0060"]; // Tuple for latitude and longitude
console.log("Coordinates:", coordinates);

//Arrays in TypeScript
let arr: number[] = [1, 2, 3]; // array of numbers
console.log("Array:", arr);

//Generics

// Generic Function
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<number>(10);
let outpu1 = identity<string>("Aaryan");
let outpu2 = identity<boolean>(true);

console.log(output, outpu1, outpu2);

// Generic interface for a bag that can hold any type of content
// interface Bag<T> {
//     content: T;
// }

// const stringBag: Bag<string> = {content: "Apple"};
// const numberBag: Bag<number> = {content: 5};

// console.log(stringBag, numberBag);


//Generic Class
class Storage<T> {
    private items: T[] = [];

    addItems(item: T): void { // no return type
        this.items.push(item);
    }

    getItem(index: number): T {
        return this.items[index]!; // non-null assertion operator to indicate that the item will exist at the given index
    }
}

const names = new Storage<string>();
names.addItems("Krishna");
names.addItems("Aditya");
names.addItems("Ansh");

console.log(names.getItem(0), names.getItem(1), names.getItem(2), names.getItem(3)); // undefined for index 3