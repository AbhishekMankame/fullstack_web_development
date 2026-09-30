console.log("chai code");

// This is synchronous JS
for(let index = 0; index < 10; index++) {
    console.log(index)
}

// Asynchronous: It's like ability to have pause in the language

/*
Some scenarios where pause is required
- Network calls
- Write/Read files
- time function
- user input, etc
*/

// Time function example
function sayHello() {
    console.log("I would like to say Hello");
}

setTimeout(() =>{
    sayHello();
}, 4000);

for(let index = 0; index < 10; index++) {
    console.log(index)
}