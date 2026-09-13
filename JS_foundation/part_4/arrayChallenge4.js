/*
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`.
    Add `"Berlin"` to the array using the `push` method.
*/

let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited[2] = "Berlin";
console.log(citiesVisited);
console.log(citiesVisited.length);
console.log(citiesVisited[2]);
citiesVisited[citiesVisited.length] = "Berlin";
console.log(citiesVisited);
console.log(citiesVisited.length);

citiesVisited.push("Manila");
console.log(citiesVisited);
console.log(citiesVisited.length);

// Note: `push()` adds the value at the end of an array.