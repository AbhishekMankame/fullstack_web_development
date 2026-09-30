function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`)
}

let abhishek = new Person("abhishek")
abhishek.greet();

// Prototypal Inheritence: Object inherit properties from other objects by prototype chain.