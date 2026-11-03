class BankAccount {
    #balance = 0;
    // If we push hash (#), then this variable will not be available to visit to anyone.
    // If they want to visit, then we need to provide the custom method

    deposit(amount) {
        this.#balance += amount;
        return this.#balance;
    }
    getBalance() {
        return `${this.#balance}`;
    }
}

// Note: I can the `balance` within the class, but nobody outside the class cannot access it.

let account = new BankAccount();
console.log(account.getBalance());

// Abstraction: It hides the complex implementation details.

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
        let msgOne = this.start();
        let msgTwo = this.brewCoffee();
        return `${msgOne} + ${msgTwo}`;
    }
}

let myMachine = new CoffeeMachine()
/* console.log(myMachine.start());
console.log(myMachine.brewCoffee()); */

console.log(myMachine.pressStartButton());

// Polymorphism: It describes the ability of something to have or to be displayed in more than one form.

class Bird {
    fly() {
        return `Flying...`;
    }
}

class Penguin extends Bird {
    fly() {
        return `Penguins can't fly`;
    }
}

let bird = new Bird()
let penguin = new Penguin()
console.log(bird.fly());
console.log(penguin.fly());