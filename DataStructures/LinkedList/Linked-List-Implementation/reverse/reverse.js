const LinkedList = require("../linkedList.js");
console.log("LinkedList:", LinkedList);
LinkedList.prototype.Reverse = function () {
  if (this.head === null) {
    console.log("the list is empty ");
    return null;
  }
  if (this.head.next === null) {
    console.log("This is a single list node ");
    return;
  }
  let curent = this.head;

  let next = null;
  let pre = null;

  while (curent !== null) {
    next = curent.next;
    curent.next = pre;
    pre = curent;
    curent = next;
  }

  this.head = pre;
  return pre;
};

// module.exports = Reverse;
