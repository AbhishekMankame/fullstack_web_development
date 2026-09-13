// Objects
let username = {
        firstname:"abhishek",
        isLoggedin: true,
    };

// Note: When we go with the variables, small space is being occupied. But when we go with arrays or object, a larger memory is being reserverd for us, and each of these values are considered as variables.

const employee = {
    name: "Hitesh",
    id: 12345,
};

console.log(employee.name);
employee.name = "Mr. H";
employee.lastname = "Choudary"
console.log(employee.name);
console.log(employee.lastname);
console.log("My name is " + employee.name + " " + employee.lastname);
console.log(employee);

// Note: Here the whole object `employee` is constant, as the whole memory space is assigned to `employee` is now reserverd/constant, it is not going to change. But here we can change the values present inside it. For example here `name` and `id` can be changed as they are primitive type.

// Note: Whole idea behind the `constant` is either the memory is going to be changed or not.

console.log(username);
console.log(typeof(username));

// In-built objects
let today = new Date();
console.log(today);
console.log(today.getDate());
console.log(today.getDay());

// Array: Array is a collection of things

let heros = ["a", "b", "c", true];

// Note: In JavaScript, in arrays even multiple (or different) types are also allowed
// Note: In JS, Arrays indexing starts with 0
let anotherUser = ["hitesh", true];
console.log(anotherUser);
console.log(anotherUser[0]);
console.log(anotherUser[1]);
console.log(anotherUser[2]);


// Type conversion
console.log(1 + "1"); // Implicit type conversion
console.log("1" + 1);

let isValue = true;
console.log(isValue + 1);
// Note: JS always considers `true` as 1 and `false` as 0

console.log(Number(true));
console.log(Number(false));
console.log(Number("23"));
console.log(Number("23i")); // Here output will be `NaN` --> Not a number
console.log(typeof(Number("23i"))); // Output: number

console.log(Number(null)); // OP: 0
console.log(typeof(Number(null))); // OP: number

console.log(Number(undefined)); // OP: NaN
console.log(typeof(Number(undefined))); // OP: number

// 7* Note: In JavaScript, there is no predefined types. JavaScript checks all these types dynamically on the go.