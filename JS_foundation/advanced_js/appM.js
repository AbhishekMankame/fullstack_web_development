// Module import file

// default import
import multiply from "./mapOperationsM.js";

// Named import
import {add, subtract} from "./mapOperationsM.js"

console.log(multiply(2, 3));
console.log(add(3, 5));
console.log(subtract(7, 3));

/*
Note: In JS, there are two ways of importing and exporting the things. One is `module` and other is `common js`.
- Common js is little bit older one, still being used
*/