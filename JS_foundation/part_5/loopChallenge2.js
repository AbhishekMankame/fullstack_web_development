/*
2. Write a `while` loop that counts down from 5 to 1 and stores the numbers in an array named `countdown`.
*/

let countdown = []
let i = 5;
while(i >= 1) {
    countdown.push(i);
    i--;
    // countdown[i]=5 - i;
}

console.log(countdown);