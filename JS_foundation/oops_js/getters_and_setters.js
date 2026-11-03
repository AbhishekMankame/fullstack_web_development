// Getters and Setters

/*
JavaScript getters and setters are special methods used to access and update object properties. They provide a controlled way to read and modify values.
- get is used to retrieve the value of a property.
- set is used to update or modify the property value.
- Helps in data validation and encapsulation of object properties.

*/

class Employee{
    #salary;
    constructor(name, salary) {
        if(salary < 0) {
            throw new Error("Salary cannot be in negative");
        }
        this.name = name;
        this.#salary = salary;
    }

    get salary() {
        // return this._salary;
        return `You are not allowed to see salary`;
    }

    set salary(value) {
        if(value < 0) {
            console.log("Invalid Salary");
        } else {
            this._salary = value;
        }
    }
}

let emp = new Employee("Alice", -50000);
console.log(emp._salary);
emp.salary = 60000;