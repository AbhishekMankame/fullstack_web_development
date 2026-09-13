/*
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`.
    Create a soft copy of this array named `softCopyTeas`.
*/

let popularTeas = ["green tea", "oolong tea", "chai"]
let softCopyTeas = popularTeas
console.log(softCopyTeas)
console.log(popularTeas)
softCopyTeas.pop()
popularTeas.pop()
console.log(softCopyTeas)
console.log(popularTeas)

// Note: When we allocate a memory reference (for array). If we create a variable `tea`. The reference of the `tea` go to that memory address. When we have another variable `copyTea`, which is pointing to `tea`, internally it points to the same memory reference. When we make changes in the `tea`, it also changes for `copyTea`.