function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if(success) {
                resolve("Data fetched successfully")
            }
            else {
                reject("Error fetching data");
            }
        })
    }, 3000);
}

// Note: Promise takes a callback or also know as funtion
// Promise are either going to be resolved or rejected

// How to consume the promise

/* let response = fetchData() // This will not give any response
console.log(response); */

fetchData()
    .then((data) => console.log(data))
    .catch((error) => console.log(error));