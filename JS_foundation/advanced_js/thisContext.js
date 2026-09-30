const person = {
    name: "Abhishek",
    greet() {
        console.log(`Hi, I am ${this.name}`);
    }
}

person.greet();

const greetFunction = person.greet;
greetFunction();

const boundGreet = person.greet.bind({name: "Hitesh"});
boundGreet();

// bind, call and apply --> These are some common ones