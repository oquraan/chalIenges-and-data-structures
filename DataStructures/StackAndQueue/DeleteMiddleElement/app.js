const StackWithDeleteMiddle = require("./StackWithDeleteMiddle");
const stack = new StackWithDeleteMiddle();
stack.push(7);
console.log(stack.printStack());

stack.deleteMiddle(); //Top ->  null

console.log(stack.printStack());

stack.push(14);

stack.push(3);

stack.push(8);

stack.push(5);
console.log(stack.printStack()); // Stack: Top -> 5 ->8 -> 3->   14 -> 7
console.log("stack.deleteMiddle()");
stack.deleteMiddle();
console.log(stack.printStack()); // Stack: Top -> 5 -> 8 -> 14 -> 7
stack.push(2);

stack.push(9);

stack.push(11);
stack.push(11);

console.log(stack.printStack()); // Stack: Top -> 11 -> 11 -> 9 -> 2 -> 5 -> 8 -> 14 -> 7
console.log("stack.deleteMiddle()");

stack.deleteMiddle();

console.log(stack.printStack()); // Stack: Top-> 11 -> 11 -> 9 -> 2 -> 8 -> 14 -> 7
