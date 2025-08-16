const LinkedList = require("../linkedList");

LinkedList.prototype.RotateLinkedList = function (k) {
  // let numOfPosition = k;
  let numOfPosition = k;

  if (typeof k != "number") {
    console.log("Enter a vaild number");
    return;
  } else if (k === 0 || k === this.size || Math.abs(k) === this.size) {
    return;
  } else if (k > this.size || numOfPosition < 0) {
    numOfPosition = Math.abs(numOfPosition);
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

function RotateLeft(k) {
  if (this.head === null) {
    console.log("the list is empty ");
    return null;
  }
  if (this.head.next === null) {
    console.log("This is a single list node ");
    return;
  }
  if (k > this.size) {
    console.log("the key grater than size");

    return;
  }
  let count = 1;
  let current = this.head.next;
  let latest = this.head;
  let n,
    n2,
    n3 = this.head;

  while (current != null) {
    if (count === k) {
      n = current;
      latest.next = null;
    }
    if (current.next === null) n2 = current;
    if (latest.next !== null) latest = latest.next;
    count++;
    current = current.next;
  }
  n2.next = this.head;
  this.head = n;

  this.print();
}
