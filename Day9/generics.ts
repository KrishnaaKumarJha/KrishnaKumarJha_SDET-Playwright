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
    id: 101,
    name: "Krishna",
    age: 22,
    role: Role.User,
    email: "krishna@gmail.com"
};

const admin: Person = {
    id: 102,
    name: "Aditya",
    age: 23,
    email: "aditya@gmail.com",
    role: Role.Admin,
    isAdmin: true
};

console.log(user, admin);

//Tuples in TypeScript
let roll: [string, number] = ["Krishna",45];
console.log("Roll no.:", roll);

//Arrays in TypeScript
let arr: number[] = [1, 2, 3]; // array of numbers
console.log("Array:", arr);


//Generics
// Generic Function
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<number>(10);
let outpu1 = identity<string>("Krishna");
let outpu2 = identity<boolean>(true);

console.log(output, outpu1, outpu2);

//Generic Class
class Storage<T> {
    private items: T[] = [];

    addItems(item: T): void {
        this.items.push(item);
    }

    getItem(index: number): T {
        return this.items[index]!;
    }
}

const names = new Storage<string>();
names.addItems("Krishna");
names.addItems("Aditya");
names.addItems("Ansh");

console.log(names.getItem(0), names.getItem(1), names.getItem(2));

//generic with constraints
interface HasLength {
    length: number;
}

// generics with contraints | extends keyword
function logLength<T extends HasLength>(arg: T): void { // T -> property .length --> string, arrays
    console.log(arg.length);
}

logLength("Krishna"); // string --> length
logLength([1, 2, 3]); // array --> length
// logLength(10); // number --> X