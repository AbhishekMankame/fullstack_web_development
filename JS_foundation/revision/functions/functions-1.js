/*
1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`.
Store the result in a variable named `teaOrder`.
*/

/* function greet(name) {
    console.log(`Hello ${name}`)
}

greet("abhishek") */

function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`;
}

let teaOrder = makeTea("lemon tea");
console.log(teaOrder);
