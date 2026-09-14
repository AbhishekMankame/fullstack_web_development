/*
2. Create a function named `orderTea` that takes one parameter, `teaType`. Inside this function, create another function named `confirmOrder` that returns a message like `"Order confirmed for chai"'.
Call `confirmOrder` from which `orderTea` and return the result.
*/

function orderTea(teaType) {
    function confirmOrder() {
        return `Order confirmed for ${teaType}`;
    }
    return confirmOrder();
}

// console.log(orderTea("chai"));

let orderConfirmation = orderTea("masala chai");
console.log(orderConfirmation);