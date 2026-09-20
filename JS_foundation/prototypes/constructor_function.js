/* function greet(name) {
    console.log("Hello ", name);
} */

// Constructor function
function Person(name, age) {
    this.name = name
    this.age = age
}

// Note: Here `age` and `name` are coming from the parameter. `this.age` and `this.name` are my variables.

// Here we have created the blueprint
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Now we will create an objects
let myCar = new Car("Toyota", "Camry");
console.log(myCar);

let myNewCar = new Car("Tata", "Safari");

// Note: To create an object, we need to use the keyword new.
// Note: `this` and `new` has an internal linking, that actually makes it possible to access the internal variables.
// `this` keyword refers to the newly created object inside the function.

console.log(myNewCar);

function Tea(type) {
    this.type = type;
    this.describe = function() {
        return `this is a cup of ${this.type}`;
    }
}

let lemonTea = new Tea("lemon tea");
console.log(lemonTea);
console.log(lemonTea.describe());


function Animal(species) {
    this.species = species;
}

Animal.prototype.sound = function() {
    return `${this.species} makes a sound`;
}
console.log();
let dog = new Animal("Dog");
console.log(dog);
console.log(dog.sound());

let cat = new Animal("cat");
console.log(cat);
console.log(cat.sound());

function Drink(name) {
    if(!new.target) { // If there is no new in the target --> then we can go and throw the `new` error
        throw new Error("Drink must be called with new keyword");
    }
    this.name = name;
}

let tea = new Drink("tea")
let coffee = Drink("coffee")