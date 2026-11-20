/*
## Node.js Async/Await

Async/await is a modern way to handle asynchronous operations in Node.js, building on top of Promises to create even more readable code.

Introduced in Node.js 7.6 and standardized in ES2017, async/await allows you to write asynchornous code that looks and behaves more like synchronous code.

Async/await is basically Promises with a more readable syntax. This makes your code cleaner and more maintainable.

### Syntax and Usage:
The syntax consists of two keywords:
- `async`: Used to declare an asynchronous function that returns a Promise.
- `await`: Used to pause execution until a Promise is resolved, can only be used inside async functions

*/

async function getData() {
    console.log('Starting...')
    const result = await someAsyncOperation();
    console.log(`Result: ${result}`);
    return result;
}

function someAsyncOperation() {
    return new Promise(resolve => {
        setTimeout(() => resolve('Operation completed'), 1000);
    });
}

// Call the async function
getData().then(data => console.log('Final data: ', data));