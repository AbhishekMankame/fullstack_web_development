// Encapsulation: Encapsulation means, I want to restrict the direct access to the object data.


class BankAccount {
    #balance = 0

    deposit(amount) {
        this.#balance += amount;
        return this.#balance
    }

    getBalance() {
        return `$ ${this.#balance}`
    }
}

let account = new BankAccount()
console.log(account.getBalance())


// Abstraction: Abstraction hides the complex implementation detail

class CoffeeMachine {
    start() {
        // call DB
        // filter value
        return `Starting the machine...`;
    }
    brewCoffee() {
        // complex calculation
        return `Brewing coffee`;
    }

    pressStartButton() {
        let msgone = this.start();
        let msgtwo = this.brewCoffee();
        return `${msgone} + ${msgtwo}`
    }
}

let myMachine = new CoffeeMachine()
console.log(myMachine.start());
console.log(myMachine.brewCoffee());
console.log(myMachine.pressStartButton());


// Polymorphism: The ability of something to have or to be displayed in more than one form.

class Bird {
    fly() {
        return `Flying...`
    }
}

class Penguin extends Bird {
    fly() {
        return `Penguins can't fly`
    }
}

class Sparrow extends Bird {

}

let sparrow = new Sparrow();
console.log(sparrow.fly)
console.log(sparrow.fly());

let bird = new Bird();
let penguin = new Penguin();

console.log(bird.fly());
console.log(penguin.fly());


// static method
class Calculator {
    static add(a, b) {
        return a + b;
    }

    // Statics are a special method that can only be called by the class itself. Nobody else can call it.
}

/* let miniCalc = new Calculator()
console.log(miniCalc.add(2, 3)); */

console.log(Calculator.add(2, 3));

// Getters and setters
class Employee {
    #salary;
    constructor(name, salary) {
        if(salary < 0) {
            throw new Error("Salary cannot be in negative");
        }
        this.name = name;
        this.#salary = salary;
    }

    get salary() {
        return `You are not allowed to see salary`;
    }

    set salary(value) {
        if(value < 0) {
            console.error("Invalid Salary")
        }
        else {
            this.salary = value;
        }
    }
}

let emp = new Employee("Alice", 50000)
console.log(emp._salary)
emp.salary = 60000