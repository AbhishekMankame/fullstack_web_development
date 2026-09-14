/*
6. Write a `for` loop that lists all the cities in the array `["Paris", "New York", "Tokyo", "London"]` and stores each city in a new array named `cityList`.
*/

let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];

for(let i=0;i<cities.length;i++){
    cityList.push(cities[i]);
}

console.log("Cities: ", cities);
console.log("CityList: ", cityList);