const Node = require("./ClassNode");

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(data) {
    const newNode = new Node(data);

    newNode.next = this.top;
    this.top = newNode;

    this.size++;
  }

  pop() {
    if (this.top === null) return "Cant not pop -stack because it is empty";
    const poped = this.top.data;

    this.top = this.top.next;
    this.size--;
    return poped;
  }
  peek() {
    if (this.top === null)
      return "Can not return any thing becuse the Stack is empty ";

    return this.top.data;
  }

  isEmpty() {
    return this.top === null ? true : false;
  }

  printStack() {
    let current = this.top;
    let result = "Top -> ";
    while (current !== null) {
      result += current.data + "-> ";
      current = current.next;
    }
    result += " null ";
    return result;
  }

}
module.exports = Stack;
