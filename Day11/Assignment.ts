// 1. GENERIC API FUNCTION

/*
Scenario:
You need a reusable function to fetch data that automatically types the response.

Task:
Write a generic function fetchData<T>(url: string): Promise<T>.
It should use the fetch API, check if the response is okay,
and return the JSON parsed as type T.

Test it by creating an Album interface and fetching data from a mock URL.
*/

async function fetchData<T>(apiUrl: string): Promise<T> {

    const response = await fetch(apiUrl);

    if (!response.ok) {

        throw new Error(
            "Unable to fetch data"
        );
    }

    const result: T = await response.json();

    return result;
}

interface Album {

    userId: number;

    id: number;

    title: string;
}

async function getAlbumData() {

    const album =
        await fetchData<Album>(
            "https://jsonplaceholder.typicode.com/albums/1"
        );

    console.log("1. Album Information:");

    console.log("Album ID:", album.id);

    console.log("Album Name:", album.title);
}

getAlbumData();




// 2. RECORD TYPE FOR ROLE PERMISSIONS

/*
Scenario:
You are managing feature flags or permissions for specific user roles.

Task:
Define an enum Role { Admin, Editor, Guest }.

Use the Record utility type to create a variable PermissionMap
where every Role must be mapped to a boolean value.

If a role is missing from the object,
TypeScript should throw an error.
*/

enum Role {

    Admin = "Admin",

    Editor = "Editor",

    Guest = "Guest"
}

const rolePermissions: Record<Role, boolean> = {

    Admin: true,

    Editor: true,

    Guest: false
};

console.log("\n2. User Permissions:");

for (const key in rolePermissions) {

    console.log(
        `${key}: ${rolePermissions[key as Role]}`
    );
}




// 3. EXHAUSTIVENESS CHECKING USING never

/*
Scenario:
You want to ensure that if a new member is added to a Union,
your logic must be updated to handle it.

Task:
Create a union type:
TaskStatus = 'Open' | 'InProgress' | 'Closed'.

Write a function handleTask(status: TaskStatus)
using a switch statement.

In the default case,
assign the status to a variable of type never.

The Test:
Add 'Archived' to the union and verify that the code fails
to compile until you add the new case.
*/

console.log("\n3. Task Status Checking:");

type TaskStatus =
    | "Open"
    | "InProgress"
    | "Closed";

function checkTask(status: TaskStatus) {

    switch (status) {

        case "Open":

            console.log("Task has started");

            break;

        case "InProgress":

            console.log("Task is currently running");

            break;

        case "Closed":

            console.log("Task completed");

            break;

        default:

            const finalCheck: never = status;

            return finalCheck;
    }
}

checkTask("Open");

checkTask("InProgress");

checkTask("Closed");




// 4. RECURSIVE FOLDER STRUCTURE

/*
Scenario:
You are building a tree structure for a file system
or a sidebar menu.

Task:
Define a type FolderNode that has:
- name: string

It should also have:
- optional files: string[]
- optional subFolders property,
  which is an array of FolderNode objects.
*/

console.log("\n4. Folder Structure:");

type FolderNode = {

    name: string;

    files?: string[];

    subFolders?: FolderNode[];
};

const rootFolder: FolderNode = {

    name: "Source",

    files: ["app.ts"],

    subFolders: [

        {
            name: "Images",

            files: ["logo.png"]
        },

        {
            name: "Styles",

            files: ["main.css"]
        }
    ]
};

console.log(
    JSON.stringify(rootFolder, null, 2)
);




// 5. TEMPLATE LITERAL TYPES

/*
Scenario:
You are building a UI library and want to strictly enforce
unit types for a "spacing" prop.

Task:
Create a type MarginValue that only allows strings ending in:
- "px"
- "rem"
- "vh"

Examples:
"10px", "2rem"

Use Template Literal Types to ensure a number
must precede the unit.
*/

console.log("\n5. CSS Margin Values:");

type MarginValue =
    `${number}px`
    | `${number}rem`
    | `${number}vh`;

const space1: MarginValue = "15px";

const space2: MarginValue = "3rem";

console.log("First Margin:", space1);

console.log("Second Margin:", space2);




// 6. CONDITIONAL TYPES + infer

/*
Scenario:
You are working with a library that returns data wrapped
in a Promise, and you need to extract the underlying type.

Task:
Create a utility type UnwrapPromise<T>.

It should:
- check if T is a Promise
- use the infer keyword to return the type
  the promise resolves to
- otherwise return T itself
*/

console.log("\n6. Promise Type Extraction:");

type UnwrapPromise<T> =

    T extends Promise<infer U>
        ? U
        : T;

type StringType =
    UnwrapPromise<Promise<string>>;

type NumberType =
    UnwrapPromise<number>;

console.log(
    "Promise<string> becomes string"
);

console.log(
    "number remains number"
);




// 7. UNION TYPE OPERATIONS

/*
Scenario:
You have a massive union of possible events
but need to categorize them for specific handlers.

Task:
Given:
type AllEvents =
'click' | 'dbclick' | 'submit' | 'reset' | 'keypress'

Use Extract to create MouseEvents
(only click and dbclick).

Use Exclude to create NonFormEvents
(everything except submit and reset).
*/

console.log("\n7. Union Utility Types:");

type AllEvents =
    | "click"
    | "dbclick"
    | "submit"
    | "reset"
    | "keypress";

type MouseEvents =
    Extract<
        AllEvents,
        "click" | "dbclick"
    >;

type NonFormEvents =
    Exclude<
        AllEvents,
        "submit" | "reset"
    >;

const mouse1: MouseEvents = "click";

const mouse2: MouseEvents = "dbclick";

console.log("Mouse Events:");

console.log(mouse1);

console.log(mouse2);

const nonForm1: NonFormEvents = "click";

const nonForm2: NonFormEvents = "keypress";

console.log("\nOther Events:");

console.log(nonForm1);

console.log(nonForm2);




// 8. SAFE ASYNC FUNCTION WRAPPER

/*
Scenario:
You want to wrap any asynchronous function
with a standard error logger.

Task:
Write a generic function safeExecute<T>
that takes an async function as an argument.

It should return a new function that,
when called, executes the original function
inside a try/catch block
and returns null if it fails.
*/

console.log("\n8. Safe Async Wrapper:");

function safeExecute<
    T extends (...args: any[]) => Promise<any>
>(fn: T) {

    return async (...args: Parameters<T>) => {

        try {

            return await fn(...args);

        } catch (err) {

            console.log(
                "Function execution failed"
            );

            return null;
        }
    };
}

async function fetchUser() {

    throw new Error("Server Error");
}

const safeFetchUser =
    safeExecute(fetchUser);

safeFetchUser();




// 9. INDEX SIGNATURES

/*
Scenario:
You are receiving a "Metadata" object from a server
where the keys are dynamic strings,
but the values must be either:
- string
- number
- boolean

Task:
Create an interface UserMetadata
that has a required:
createdAt: Date

but allows any other dynamic string keys
as long as their values match the union type mentioned.
*/

console.log("\n9. Dynamic Metadata:");

interface UserMetadata {

    createdAt: Date;

    [key: string]:
        | string
        | number
        | boolean
        | Date;
}

const userInfo: UserMetadata = {

    createdAt: new Date(),

    username: "Krishna",

    age: 21,

    premiumUser: true
};

console.log(userInfo);




// 10. MAPPED TYPES WITH KEY REMAPPING

/*
Scenario:
You have a data model and need to generate
a type for an API response that "prefixes" all the keys.

Task:
Define an interface:
Car {
    make: string;
    model: string;
}

Create a mapped type ApiResponse<T>
that iterates through keys of T
and renames them to be uppercase
and prefixed with DATA_.

Example:
make becomes DATA_MAKE
*/

console.log("\n10. API Response Mapping:");

interface Car {

    make: string;

    model: string;
}

type ApiResponse<T> = {

    [K in keyof T as
        `DATA_${Uppercase<string & K>}`]: T[K];
};

type CarResponse =
    ApiResponse<Car>;

const car: CarResponse = {

    DATA_MAKE: "BMW",

    DATA_MODEL: "X5"
};

console.log(car);