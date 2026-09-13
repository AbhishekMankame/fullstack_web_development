/*
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`.
    Merge these two arrays into a new array named `worldCities`.
*/

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
// let worldCities = europeanCities + asianCities; // This became string. OP: Paris,RomeTokyo,Bangkok

// let worldCities = [europeanCities, asianCities]; // This created arrays inside an array (2D array). OP: [ [ 'Paris', 'Rome' ], [ 'Tokyo', 'Bangkok' ] ]. This is of the type object

let worldCities = europeanCities.concat(asianCities);

console.log(worldCities);
console.log(typeof(worldCities));