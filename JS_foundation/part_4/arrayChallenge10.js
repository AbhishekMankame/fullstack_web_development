/*
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`.
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];

let isLondonInList = cityBucketList.includes("London")
console.log(isLondonInList);
console.log(typeof isLondonInList);