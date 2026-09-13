// Number

let balance = 120;
let anotherBalance = new Number(120);

console.log(balance);
console.log(anotherBalance)
console.log(anotherBalance.valueOf());
console.log(typeof(balance));
console.log(typeof(anotherBalance));

// Note: Every single primitive can also be converted into non-primitive (or object) types

// boolean
let isActive = new Boolean(true); // Not recommended 
console.log(isActive);
console.log(isActive.valueOf());
console.log(typeof(isActive));

// null and undefined
 let firstName;
 console.log(firstName);
 console.log(typeof(undefined));

 let secondName = null;
 console.log(secondName);
 console.log(typeof(secondName));

 let middleName = undefined;
 console.log(middleName);
 console.log(typeof(middleName));


// String

let myString = "hello";
let myStringOne = 'Hola';
let userName = 'abhishek';
let greetMessage = `Hello`;

console.log(myString, myStringOne, userName, greetMessage);

let oldGreet = myString + " " + "Abhishek";
console.log(oldGreet);

let newGreet = `Hello ${userName}!`; // This is known as String Interpolation
console.log(newGreet);

console.log(`Value is ${2 * 2}`);

// Symbol: Symbol gives the unique value. It guarantees the uniqueness on the page.

let sm1 = Symbol();
let sm2 = Symbol('Abhishek');

console.log(sm1);
console.log(sm2);
console.log(sm2.valueOf());
console.log(typeof(sm2));
console.log(sm1 == sm2);