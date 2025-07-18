const Stack = require("./Stack");
const Queue = require("./Queue");

const stack = new Stack();

stack.push(10); // Stack: Top -> 10

stack.push(20); // Stack: Top -> 20 -> 10

stack.push(30); // Stack: Top -> 30 -> 20 -> 10
console.log("Print the contant of Stack");
console.log(stack.printStack());

console.log(stack.pop()); // Output: 30 >> Last In First Out
console.log("Print the contant of Stack");

console.log(stack.printStack());

console.log(stack.peek()); // Output: 20 >> Top value stays
console.log(stack.isEmpty()); // Output: false >> Stack still has 20, 10

stack.pop(); // Removes 20

stack.pop(); // Removes 10
console.log("Print the contant of Stack");

console.log(stack.printStack());

console.log(stack.isEmpty()); // Output: true >> Now it's emptys

console.log("--------------------Queue==============");
const queue = new Queue();

queue.Enqueue(10); // Queue: Front -> 10

queue.Enqueue(20); // Queue: Front -> 10 -> 20

queue.Enqueue(30); // Queue: Front -> 10 -> 20 -> 30
console.log("Print the contant of Queue");

console.log(queue.printQueue());
console.log(queue.Dequeue()); // Output: 10 >> First In First Out
console.log(queue.Peek()); // Output: 20 >> Front value stays
console.log("Print the contant of Queue");

console.log(queue.printQueue());

console.log(queue.isEmpty()); // Output: false >> Queue still has 20, 30
queue.Dequeue(); // Removes 20

queue.Dequeue(); // Removes 30
console.log("Print the contant of Queue");

console.log(queue.printQueue());

console.log(queue.isEmpty()); // Output: true >> Now it's empty
