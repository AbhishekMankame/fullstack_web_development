let computer = {
    cpu: 12
};

let lenovo = {
    screen: "HD",
    __proto__: computer
};

let tomHardware = {};

// console.log(computer);
console.log(lenovo);

// console.log(`computer `, computer.__proto__);
console.log(`lenovo `, lenovo.__proto__);


let genericCar = {tyres: 4}

let tesla = {
    driver: "AI",
}

Object.setPrototypeOf(tesla, genericCar)

console.log(`tesla `, tesla)
console.log(`tesla `, tesla.tyres)
console.log(`tesla `, tesla.driver)

console.log(`tesla `, Object.getPrototypeOf(tesla));
console.log(`tesla `, tesla.__proto__);

// hasOwnProperty

console.log(tesla.hasOwnProperty(`driver`));
console.log(tesla.hasOwnProperty(`tyres`));
console.log(genericCar.hasOwnProperty(`tyres`));
console.log(genericCar.hasOwnProperty(`driver`));