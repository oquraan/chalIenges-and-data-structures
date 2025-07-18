const Node = require("./NodeClass");
// const Reverse = require("./reverse/reverse.js");
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
    this.last = null;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.size++;
      return;
    }

    let curent = this.head;

    while (curent.next !== null) {
      curent = curent.next;
    }

    curent.next = newNode;
    this.last = newNode;
    this.size++;
  }

  remove(data) {
    if (this.head === null) {
      console.log("The linkedlist is empty  ");
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;

      this.size--;
      return;
    }
    // let curent = this.head;
    // let cu = curent.next;

    // do {
    //   if (cu.data === data) {
    //     curent = cu.next;
    //     break;
    //   } else {
    //     curent = curent.next;
    //     cu = cu.next;
    //   }
    // } while (cu.next !== null);
    let curent = this.head.next;
    let pre = this.head;
    let isRemove = false;

    while (pre.next !== null) {
      if (curent.data === data) {
        pre.next = curent.next;
        this.size--;
        isRemove = true;
        break;
      } else {
        pre = curent;

        curent = curent.next;
      }
    }
    if (!isRemove) {
      console.log("the number not found ");
    }
  }
  printList() {
    if (this.head === null) {
      console.log("the list is empty ");
      return;
    }
    let curent = this.head;
    let result = "";
    while (curent !== null) {
      result += curent.data + " -> ";
      curent = curent.next;
    }
    console.log("Head -> " + result + "Null");
    return result;
  }
  includes(data) {
    if (this.head === null) {
      return "the list is empty ";
    }
    let curent = this.head;
    while (curent !== null) {
      if (curent.data === data) {
        return true;
      }
      curent = curent.next;
    }

    return false;
  }
  insertAt(data, index) {
    if (index > this.size) {
      console.log("the index greater than list ");
      return;
    }
    const newNode = new Node(data);
    if (this.head === null || index === 0) {
      this.head = newNode;
      return;
    }

    let curent = this.head;
    let count = 1;
    while (curent !== null && index > count) {
      curent = curent.next;
      count++;
    }
    let c = curent.next;

    curent.next = newNode;
    newNode.next = c;
    this.size++;

    // curent.next = newNode;
  }
  // Reverse() {
  //   if (this.head === null) {
  //     console.log("the list is empty ");
  //     return;
  //   }
  //   if (this.head.next === null) {
  //     console.log("This is a single list node ");
  //     return;
  //   }
  //   let curent = this.head;

  //   let next = null;
  //   let pre = null;

  //   while (curent !== null) {
  //     next = curent.next;
  //     curent.next = pre;
  //     pre = curent;
  //     curent = next;
  //   }

  //   this.head = pre;
  // }
}

module.exports = LinkedList;
