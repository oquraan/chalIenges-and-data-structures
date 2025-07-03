const LinkedList = require("../linkedList");

LinkedList.prototype.RotateLinkedList = function (k) {
  let numOfPosition = k;

  if (typeof k != "number") {
    console.log("Enter a vaild number");
    return;
  } else if (k <= 0 || k === 8) {
    return;
  } else if (k > this.size) {
    numOfPosition = numOfPosition % this.size;
  }

  let curent = this.head;

  let count = 1;
  while (count < numOfPosition && curent.data && curent.next.data) {
    curent = curent.next;
    count++;
  }

  // this.last.next = this.head;
  let preLast = curent.next;
  curent.next = null;

  this.last.next = this.head;
  this.head = preLast;

  curent = this.head;
  while (curent.next != null) {
    curent = curent.next;
  }

  this.last = curent;
};
