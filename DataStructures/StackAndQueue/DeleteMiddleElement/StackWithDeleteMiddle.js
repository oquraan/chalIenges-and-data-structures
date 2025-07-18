const Stack = require("../StackAndQueueClean/Stack");
class StackWithDeleteMiddle extends Stack {
  constructor() {
    super();
  }
  deleteMiddle() {
    if (this.top === null) return "the Stack is empty  ";
    if (this.top.next === null) {
      this.top = null;
      this.size--;
      return "you have one eleement";
    }
    let position;
    if (this.size % 2 === 0) position = this.size / 2;
    else position = Math.ceil(this.size / 2);
    let next = this.top.next;
    let current = this.top;
    let count = 2;
    while (next !== null && position >= count) {
      if (count === position) {
        current.next = next.next;
        this.size--;
      }
      next = next.next;
      current = current.next;
      count++;
      return this.size % 2 == 0 ? "Odd" : "Even";
    }
  }
}
module.exports = StackWithDeleteMiddle;
