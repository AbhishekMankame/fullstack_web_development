let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    start: function() {
        return `${this.make} car got started in ${this.year}`
    },
};
// console.log(car);
// console.log(car.start());

function Person(name, age) {
    this.name = name
    this.age = age
}

let john = new Person("John Doe", 20);
// console.log(john)
// console.log(john.name)
// console.log(john.age)

// Prototypal chain
function Animal(type) {
    this.type = type
}
// Note: The whole idea of having `this.type` is that I can access this whole prototypal chain and can inject my own methods.

Animal.prototype.speak = function() {
    return `${this.type} makes a sound`
}

Array.prototype.abhishek = function () {
    return `Custom method ${this}`;
}

let myArray = [1, 2, 3, 4, 5];
// console.log(myArray.abhishek());
let myNewArray = [1, 2, 3];
// console.log(myNewArray.abhishek());


// Class in JS
class Vehicle {
    constructor(make, model) {
        this.make = make
        this.model = model
    }

    start() { // Note: Here we do not need function keyword as it is inside the class
        return `${this.model} is a car from ${this.make}`
    }

    // Inheritence: If I create another class and I've already created some functionality in it, I want to borrow that functionality. Eg: If my dad owns the car, I would like to borrow that car.
};

class Car extends Vehicle {
    drive() {
        return `${this.make} : This is an inheritence example`;
    }
}

let myCar = new Car("Toyota", "Corolla")
console.log(myCar);
console.log(myCar.start());
console.log(myCar.model);
console.log(myCar.make);
console.log(myCar.drive());

/* let vehOne = Vehicle("Toyota", "Corolla")
console.log(vehOne.make);

This will give an error, that `new` keyword need to be present
*/

let VehOne = new Vehicle("Toyota", "Carolla")
console.log(VehOne.make)
console.log(VehOne.model)