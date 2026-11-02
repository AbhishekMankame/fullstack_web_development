/*
## JS Prototype

JavaScript uses a prototype-based object model where objects inherit properties and behavior from other objects.

- Functions, arrays, and strings are specialized objects.
- Inheritance is handled through prototypes rather than classes.
- Prototypes define how objects share properties and methods.

In JavaScript, a prototype acts as a shared blueprint that stores common methods and properties for objects of the same type.
- Properties and methods added to a prototype are shared across all instances.
- This mechanism helps optimize memory usage and enables inheritance.

*/

Object.prototype.print = function() {
    console.log("I am from object prototype");
}

let b = {
    name: "Abhishek",
    age: 25
}

b.print();

/*
- Most objects have a prototype, but objects created with Object.create(null) do not.
- Adding a method or property to an object's prototype makes it accessible to all its instances.
- The print() method is added to Object.prototype, so any object (like b) cam use it.
- Using prototypes avoids code duplication by defining shared methods once, making the code more efficient.
*/

/*
### Working of Prototype in JavaScript:
- Every JavaScript object has an internal [[Prototype]] that enables inheritance.
- When a property is accessed, JavaScript first checks the object itself, then looks up the prototype chain until the property is found or reaches null.
- Functions have a prototype property, which is used when they are called as constructors with the new keyword.
- Objects created using a constructor inherit properties and methods from the constructor's prototype.
- Since all instances share the same prototype, methods are not duplicated, improving memory efficiency.
- Any update to a prototype is reflected in all existing and future instances.
*/