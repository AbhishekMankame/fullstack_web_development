/*
## Currying Function in JavaScript

Currying is used in JavaScript to break down complex function calls into smaller, more manageable steps. It transforms a function with multiple arguments into a series of functions, each taking a single argument.

- It converts a function with multiple parameters into a sequence of functions.
- Each function takes a single argument and returns another function until all arguements are received.
- Helps in functional programming by enabling function reusability and composition.
*/

// Normal Function
function add1(a, b) {
    return a + b;
}
console.log(add1(2,3));

// Function Currying
function add2(a) {
    return function(b) {
        return a + b;
    }
}

const addTwo = add2(5); // Function

console.log(addTwo(4));
console.log(typeof(addTwo()));  // Number
console.log(typeof(addTwo));    // function

/*
- Normal Function: Directly takes two arguements (a and b) and returns their sum.
- Function Currying: Breaks the add function into two steps. First, it takes a, and then, when calling addTwo(4), it takes b and returns the sum.
*/

/*
## Working of Currying in JavaScript:
Currying function in the JavaScript can be done manually, but it can also be done using the closure. Below is shown that how currying function works.

- Creating the First Function: The first function takes the first argument and gives back a new function to take the next one.
- Returning a New Function: The returned function takes the next arguement and keeps going until all the arguements are given.
- Returning the Result: Once all the arguments are provided, the final result is calculated and returned.

*/

// Currying with Arrow Function
// Arrow function can be used to make currying function short:

const add3 = a => b => a + b;
console.log(add3(2)(3));

// This syntaxt is shorter and doing the same thing as the earlier example.

/*
### Using Currying in JavaScript
In JS, currying function is used in following cases:
- Partial Application: In the partial application we set some arguments in advance in advance in the function call and it later with the remaining arguments.
- Higher-Order Function: When one function takes the other functions as arguments (eg: map, filter, reduce) in that case we can use the currying function to manage the arguments more effectively.
- Functional Programming: Where functions are treated as important and focus is on not chaning data and combining functions in those cases currying works perfectly.
*/