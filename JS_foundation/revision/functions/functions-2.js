/*
2. Create a function named `orderTea` that takes one parameter, `teaType`. Inside the function, create another function named `confirmOrder` that returns a message like `"Order confirmed for chai".
Call `confirmOrder` from within `orderTea` and return the result.

*/

function orderTea(teaType) {
    function confirmOrder() {
        return `Order confirmed for chai`;
    }
    return confirmOrder() // This is an execution
}

let orderConfirmation = orderTea("chai");
console.log(orderConfirmation);