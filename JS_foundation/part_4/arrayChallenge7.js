/*
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`.
    Create a hard copy of this array named `hardCopyCities`.
*/

let topCities = ["Berlin", "Singapore", "New York"]
let hardCopyCities = [...topCities]; // This is known as rest and spread operators
// let hardCopyCities = topCities.slice();
console.log(topCities);
console.log(hardCopyCities);
topCities.pop();
console.log(topCities);
console.log(hardCopyCities);
