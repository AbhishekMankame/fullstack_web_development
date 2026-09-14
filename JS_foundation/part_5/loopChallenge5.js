/*
5. Write a `for` loop that multiplies each element in the array `[2, 4, 6]` and stores the results in a new array named `multipliedNumbers`.
*/

let multipliedNumbers = [];
let numbers = [2, 4, 6];

/* for (initPhase; condition; incre/decre) {

} */

for (let l = 0; l < numbers.length; l++) {
    // takeNumber = numbers[l] * 2;
    // multipliedNumbers.push(takeNumber);

    multipliedNumbers.push(numbers[l]*2);
}

console.log(multipliedNumbers);