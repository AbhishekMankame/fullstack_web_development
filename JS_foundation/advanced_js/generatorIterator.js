/* 
Generator function: In JavaScript, it is a special type of function that can pause its execution and resume it later, allowing it to produce a sequence of values over time instead of returning just one single value.

Unlike regular functions that run until they hit a `return` statement or finish entirely, a generator function saves its entire context (variables and state) everytime it pauses, picking up exactly where it left off when called again.

- Generator function does not execute things all at the once.

It actually creates things based on the resume basis.
You hit it once, it is going to generate one result. You hit it again, it is going to generate result again.

- There is a special keyword called `yield`. Instead of `return` you can go and use `yield`.
*/


function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

let gen = numberGenerator()

// console.log(gen()); --> This will give error

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
