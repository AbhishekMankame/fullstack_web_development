/*

## JavaScript Sets 

- A JavaScript Set is a collection of unique values.
- Each value can only occur once in a Set.
- The values can be of any type, primitive, values or objects.

### How to create a set?
You can create a JavaScript set by:
- Passing an array to `new_Set()`.
- Create an empty set and use `add()` to add values.

*/

// Create a Set
const letters = new Set(["a", "b", "c"]);

// Create a Set and add values
const letters2 = new Set();
letters2.add("a");
letters2.add("b");
letters2.add("c");

console.log(letters);
console.log();
console.log(letters2);


