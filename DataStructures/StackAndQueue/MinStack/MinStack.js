const Node = require("./ClassNode");

class MinStack {
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
  DeleteInMiddle() {
    let position;
    if (this.size % 2 == 0) {
      position = this.size / 2;
    } else position = Math.ceil(this.size / 2);
  }
  top() {
    if (this.top === null) return "the Stack is empty  ";
    else return this.top.data;
  }
  getMin() {
    if (this.top === null) return "the Stack is empty  ";
    if (this.top.next === null) {
      // return "(min: " + this.top.data + ")";
      return this.top.data;
    }

    let min = this.top.data;

    let current = this.top;
    while (current.next != null) {
      if (min > current.next.data) min = current.next.data;

      current = current.next;
    }

    // return "(min: " + min + ")";
    return min;
  }
}
module.exports = MinStack;
