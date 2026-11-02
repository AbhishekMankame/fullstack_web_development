/*
## JavaScript WeakSet
- A JavaScript `WeakSet` is a collection of values where the `values must be objects`.
- A WeakSet holds weak references to its values.
*/

let mySet = new WeakSet();

let myObj = {fname: "John", lname: "Doe"};
let myObjBack = {fname: "John", lname: "Doe"};

mySet.add(myObj);
mySet.add(myObjBack);


let answer = mySet.has(myObj);
console.log(answer);
console.log(mySet); // We cannot print or iterate over weakset.

/*
## Garbage Collection:
- JavaScript employs a memory management mechanism known as `Garbage Collection`.

The primary functions are:
- Ensuring efficient use of memory resources.
- Reclaim memory occupied by variables that are no longer in use.
- Preventing memory leaks.
*/

/*
## Weak References:
Unlike a regular Set, a WeakSet does not prevent its value from being garbage collected.
If a value (an object) has no references in a program, it becomes eligible for garbage collection.
When the value is garbage collected, it is removed from the WeakSet.
*/

// Create a WeakSet
let mySet2 = new WeakSet();

// Creates an Object
let myObj2 = {fname: "John", lname: "Doe"};

// Add the Object
mySet2.add(myObj2);

// Remove the Object from memory
myObj2 = null;

// now myObj in mySet will be garbage collected