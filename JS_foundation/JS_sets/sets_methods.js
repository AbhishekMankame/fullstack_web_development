// Set Methods in JS

// The size Property
const mySet = new Set(["a", "b", "c"]);

// The number of elements are
console.log(mySet.size);

// Listing Set Elements
// You can list all Set elements (values) wotj a `for..of` loop:

const letters = new Set(["a", "b", "c"]);

let text = "";
for(const x of letters) {
    text += x;
}
console.log(text);

// The has() Method
// The has() method returns `true` if a specified value exists in a set.

const letters2 = new Set(["a", "b", "c"]);

answer = letters2.has('a');
console.log(answer);
console.log(letters2.has("a"));
console.log(letters2.has("d"));

// The forEach() Method
// The forEach() method invokes a function for each Set element.

const letters3 = new Set(["a", "b", "c", "d"]);

let text2 = "";
letters3.forEach(function(value) {
    text2 += value;
})

console.log(`text2: ${text2}`);
console.log(letters3.size);

// The values() Method
// The values() method returns an iterator object with the value in a Set:

const letters4 = new Set(["a", "b", "c", "d", "e"]);

const myIterator = letters4.values();

let text3 = "";
for(const entry of myIterator) {
    text3 += entry;
}

console.log(`text3: ${text3}`);

// The keys() Method
// The keys() method returns an iterator object with the value in a Set:
// Imp Note: A Set has `no keys`, so keys() returns the same as values(). This makes Set compatible with Maps.

const letters5 = new Set(["a", "b", "c", "d"]);
const myIterator2 = letters5.keys();

let text4 = "";
for(const x of letters5) {
    text4 += x;
}
console.log(`text4: ${text4}`)

/*
### The entries() Method
The entries() method returns an iterator with [value, value] pairs from a Set.

Note: The entries method is supposed to return a [key, value] pair from an object.
A set has no keys, so the entries() method returns [value, value].
This makes Sets compatible with Maps.
*/

const letters6 = new Set(["a", "b", "c", "d", "e", "f"]);

const myIterator3 = letters6.entries();

let text5 = "";
for(const entry of myIterator3) {
    text5 += entry;
}
console.log(`text5: ${text5}`);