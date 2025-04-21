"use strict";
// This a hello world string
let helloWorld = "Hello World";
// TypeScript is a superset of JavaScript that compiles to plain JavaScript
const msg = 'Hello World!';
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
};
// Create an object with properties and methods using arrow functions
const hero = {
    name: 'Hulk',
    age: 100,
    powers: ['super strength', 'regeneration'],
    getName: () => {
        return hero.name;
    }
};
// Create an object that implements the User interface
const user = {
    name: 'Carlos Tobar',
    age: 25,
    isActive: true,
    id: 0,
    roles: ['admin', 'user'],
    getName: function () {
        return this.name;
    }
};
// Create a class that implements the Person interface
class UserAccount {
    // Create a constructor that takes the name, age and id as parameters
    constructor(name, age, id) {
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
        return;
        `Name: ${this.name}, Age: ${this.age}, ID: ${this.id}`;
    }
}
// Create an object that implements the User interface
const userAccount = new UserAccount('Carlos Tobar', 25, 0);
// Use type in typescript
let id = 5;
let firstname = 'Carlos';
let hasPet = true;
let hobbies = ['sports', 'music'];
let unit;
unit = 5; // unit is a number
