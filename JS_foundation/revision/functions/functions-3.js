// Arrow functions

/*
3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`.
Store the result in a variable named `totalCost`.
*/

/*
Different ways of having a function

1. function greet() {}  // This is known as `regular function`.

2. const greet = () => {} // This is known as `arrow function`.

Note: This is `unnamed function`
() => {}
*/

const calculateTotal = (price, quantity) => {
    return price * quantity;
}

let totalCost = calculateTotal(5, 10);
console.log(totalCost);

/*
The above arrow function code can be written in one line

const calculateTotal = (price, quantity) => price * quantity;

Note: Here `return` keyword is not required. When you omit `{}`, the expression is automatically returned.
- The reason is that JavaScript arrow functions have a feature called an implicit return.
When you write an arrow function using a single expression without curly braces {}, JavaScript automatically returns the result of that expression.
*/