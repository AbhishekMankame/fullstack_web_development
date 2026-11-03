/*
## Object Oriented Programming
Object-Oriented Programming (OOP) in JavaScript is a programming paradigm based on the concept of objects that contain data (properties) and behavior (methods). It focuses on designing software that closely represents real-world entities. It is used to:
- Improve code reusability
- Enhances maintainability and scalability
- Makes programs easier to understand and manage
- Closely models real-world entities
*/

// Creating a class
class Student {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
    displayInfo() {
        console.log("Name: ", this.name);
        console.log(`Age: ${this.age}`);
    }
}

// Creating an object
const student1 = new Student("Rahul", 20);

// Calling method
student1.displayInfo();

// Another example:

class Vehicle {
    constructor(make, model) {
        this.make = make
        this.model = model
    }

    // Note: All the functions, when they are declared inside the class, we call it as method.
    start() {
        return `${this.model} is a car from ${this.make}`;
    }
}

class Car extends Vehicle {
    drive() {
        return `${this.make} : This is an inheritance example`;
    }
}

let myCar = new Car("Toyota", "Corolla");

console.log(myCar.start());
console.log(myCar.drive());

let vehOne = new Vehicle("Toyota", "Corolla");
console.log(vehOne.make);

// Note: Class constructor Vehicle cannot be invoked without 'new'
// `new` keyword is mandatory while invoking the objects.