/*
7. Write a `forEach` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`.
    Stop the loop when `"chai"` is found, and store all previous tea types in an array named `availableTeas`.
*/

let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];

teaCollection.forEach(tea => {
    console.log(tea);
});

/* function hello () {
    console.log("abc");
} */

teaCollection.forEach(function(tea){
    if(tea === "chai"){
        return;
    }
    availableTeas.push(tea);
});

// Note: `break` and `continue` keywords are meant for the loops, they do not work for functions.

console.log(availableTeas);