const Node = require("./ClassNode");

class Queue {
  constructor() {
    this.top = null;
  }

  Enqueue(data) {
    const newNode = new Node(data);
    if (this.top === null) {
      this.top = newNode;

      return;
    }
    let curent = this.top;

    while (curent.next !== null) {
      curent = curent.next;
    }
    curent.next = newNode;
  }

  Dequeue() {
    if (this.top === null)
      return "you can not remove any node becuse  the queue is empty ";
    if (this.top.next === null) {
      this.top = null;
      return;
    }

    const dequeue = this.top.data;
    this.top = this.top.next;
    return dequeue;
  }

  Peek() {
    return this.top ? this.top.data : "the queue is empty";
  }
  isEmpty() {
    return this.top === null ? true : false;
  }

  printQueue() {
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

module.exports = Queue;
