// Static method
// Static is a special method which can be called only by the class itself.
class Calculator {
    static add(a, b) {
        return a + b;
    }
}

// let miniCalc = new Calculator();
// console.log(miniCalc.add(2, 3));

console.log(Calculator.add(2, 3));