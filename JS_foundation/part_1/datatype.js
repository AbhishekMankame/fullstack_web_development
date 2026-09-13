console.log("Hello");
// console.log("Chai");

// This is single line comment

/*
This is multiline comment
*/

/*
Common datatypes:

String -> This is just a set of characters
Number
Boolean --> This is just like telling 'True' or 'False'
BigInt --> This is used to store very large numbers. There is a special container or holder which can hold these numbers.

Undefined -> There is no definition for this. This definition might be fulfilled in the future or may be not.
null -> null means empty

Object

Symbol

*/

// var score = 102;

let score = 102;
let name = "chaicode.com";
let isLoggedIn = false;

// Object
let teaTypes = ["lemon tea", "orange tea", "oolong tea"]; // This is technically called an Array

let user = {
    firstName: "Abhishek", lastName: "Mankame"
}

console.log(teaTypes);
console.log(teaTypes[0]);
console.log(user);
console.log(user[0]);
console.log(user.firstName);
console.log(user.lastName);

// Borrowing the values from another variable

let getScore = score;
console.log("Score:", score);
console.log("Get score:", getScore);
