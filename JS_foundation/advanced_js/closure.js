// Closure in JS:
// Closures are function, and they remember the environment in which they are created.
// Function can retain the variables which are declared outside of it.

function outer() {
    let counter = 0;
    return function() {
        counter++;
        return counter;
    }
}

let increment = outer();
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
