/*
3. Write a `do while` loop that prompts a user to enter their favorite tea type until they enter `"stop"`.
    Store each tea type in an array named `teaCollection`.
*/

let teaCollection = [];
let tea

do {
    tea = prompt(`Enter your favorite tea (type "stop" to finish)`)

    if(tea !== "stop") {
        teaCollection.push(tea);
    }
} while (tea !== "stop");

// Note: `Prompt` is a thing of JavaScript. But Node JS by default doesn't support that. So we will test this code on the browser.