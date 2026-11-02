/*
### Tracking Objects
A WeakSet is similar to a Set, but it only stores objects, and holds them weakly. If there are no other references to an object, it gets garbage collected automatically.

This makes it handy for tracking objects without storing extra data (like counts)
*/

let text = "";

// Create a WeakSet to track persons
const persons = new WeakSet();

// Visitor Objects
const John = {name: "John", age: 40};
const Paul = {name: "Paul", age: 41};
const Ringo = {name: "Ringo", age: 42};
const George = {name: "George", age: 43};

// Track visits
track(Paul);
track(Ringo);
track(Paul);

function track(visitor) {
    if(persons.has(visitor)) {
        text += visitor.name + " is visiting again.";
    } else {
        persons.add(visitor);
        text += visitor.name + ", age" + visitor.age + ", is visiting for the first time.";
    }
}

console.log(text);