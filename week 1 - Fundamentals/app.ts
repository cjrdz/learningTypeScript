// This a hello world string
let helloWorld = "Hello World";

// TypeScript is a superset of JavaScript that compiles to plain JavaScript
const msg: string = 'Hello World!';

// Create an object with properties and methods
const me = {
    name: 'Carlos Tobar',
    age: 25,
    isActive: true,
    id: 0,
    roles: ['admin', 'user'],
    getName: function () {
        return this.name;
    }
}

// Create an object with properties and methods using arrow functions
const hero = {
    name: 'Hulk',
    age: 100,
    powers: ['super strength', 'regeneration'],
    getName: () => {
        return hero.name;
    }
}

// Create an object with interfaces
interface Person {
    name: string;
    age: number;
    isActive: boolean;
    id: number;
    roles: string[];
    getName: () => string;
}
// Create an object that implements the User interface
const user: Person = {
    name: 'Carlos Tobar',
    age: 25,
    isActive: true,
    id: 0,
    roles: ['admin', 'user'],
    getName: function () {
        return this.name;
    }
}

// Create an object with properties and methods using classes and object oriented programming
interface User {
    name: string;
    age: number;
    id: number
}

// Create a class that implements the Person interface
class UserAccount {

    name: string;
    age: number;
    id: number;

    // Create a constructor that takes the name, age and id as parameters
    constructor(name: string, age: number, id: number) {
        this.name = name;
        this.age = age;
        this.id = id;
    }

    // Create a method that returns the name of the user
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getId() {
        return this.id;
    }
    getInfo() {
        return
        `Name: ${this.name}, Age: ${this.age}, ID: ${this.id}`;
    }
}
// Create an object that implements the User interface
const userAccount: UserAccount = new UserAccount('Carlos Tobar', 25, 0);

// Use type in typescript

let id: number = 5;
let firstname: string = 'Carlos';
let hasPet: boolean = true;
let hobbies: string[] = ['sports', 'music'];
let unit: number;

unit = 5; // unit is a number
