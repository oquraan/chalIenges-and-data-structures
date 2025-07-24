const MinStack = require("./MinStack");
const stack = new MinStack();
console.log(stack.getMin());
stack.push(15); // Top -> 15 (min: 15)
console.log(stack.getMin());
stack.push(7); // Top -> 7 -> 15 (min: 7)
console.log(stack.getMin());
stack.push(12); // Top -> 12 -> 7 -> 15 (min: 7)
console.log(stack.getMin());
stack.push(3); // Top -> 3 -> 12 -> 7 -> 15 (min: 3)
console.log(stack.getMin());
console.log("Sssssss");
console.log(stack.printStack());
let min = stack.getMin();
console.log(min);
stack.pop();
console.log(stack.printStack());
console.log(stack.getMin());
stack.pop();
console.log(stack.printStack());
console.log(stack.getMin());
stack.push(2);
console.log(stack.getMin());
console.log(stack.isEmpty());
