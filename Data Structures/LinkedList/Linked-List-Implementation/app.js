const LinkedList = require("./linkedList");
require("./reverse/reverse.js");
require("./MergeStored/mergeStored.js");
require("./RotateLinkedList//RotateLinkedList.js");
const l = new LinkedList();
console.log("this is my output to do debugging");

console.log(
  "l.insertAt(0, 0 )" +
    "it is work becuse the list is empty and i store in the first node "
);
l.insertAt(0, 0);
console.log(
  "l.add(1);" + "it is work and insert the secound node in end of linkedlist "
);

l.add(1);
console.log(
  "l.add(2);" + "it is work and insert the thired node in end of linkedlist "
);

l.add(2);
console.log("l.printList();" + "  to print all data node");

l.printList();
console.log("l.add(3);" + "it is work and insert node in end of linkedlist ");

l.add(3);
console.log("l.add(4);" + "it is work and insert  node in end of linkedlist ");

l.add(4);
console.log("l.includes(4);" + "to check if the 4 is in data node  ");

console.log(l.includes(4));
console.log("l.remove(6);" + "it not wwork beacuse the 6 data not include  ");

l.remove(6);
console.log("l.remove(3);" + "it  work beacuse the 3 include   ");
l.remove(3);
console.log("l.printList();" + "  to print all data node");

l.printList();
console.log("l.includes(5);" + "to check if the 5 is in data node  ");

console.log(l.includes(5));
console.log("l.includes(3);" + "to check if the 3 is in data node  ");

console.log(l.includes(3));

console.log("l.includes(4);" + "to check if the 4 is in data node  ");

console.log(l.includes(4));
console.log("l.printList();" + "  to print all data node");

l.printList();

console.log("l.insertAt(8, 7);" + "  not work becuse out of index");

l.insertAt(8, 7);
console.log("l.printList();" + "  to print all data node");

l.printList();
console.log("----------------------------------------------- ");

console.log("This Example in course explorer ");

const list = new LinkedList();

list.add(5);

list.add(10);

list.add(20);

list.add(30);

list.printList(); // Output: Head -> 5 -> 10 -> 20 -> 30 -> Null

list.remove(10);

list.printList(); // Output: Head -> 5 -> 20 -> 30 -> Null

console.log(list.includes(20));
console.log(list.includes(10));

list.insertAt(15, 2);

console.log("Sssssss");

const l3 = new LinkedList();
l3.add(1);

l3.add(2);

l3.add(3);

l3.add(4);
l3.add(5);

l3.add(6);

l3.add(7);

l3.add(8);

console.log("Before Rotate 12");

l3.printList();

l3.RotateLinkedList(12);

console.log("After rotate 12");
l3.printList();

console.log("Before Rotate 3");

l3.printList();

l3.RotateLinkedList(3);

console.log("After rotate 3");

l3.printList();
console.log("Before Rotate 6");

l3.printList();

l3.RotateLinkedList(6);
console.log("After rotate 6");

l3.printList();
console.log("Before Rotate 0");

l3.printList();

l3.RotateLinkedList(0);
console.log("After rotate 0");

l3.printList();



l3.printList();

l3.RotateLinkedList(-2);
console.log("After rotate 0");

l3.printList();
// list.Reverse();

// console.log(list.head.data);
// console.log(l.head.data);

// const l1 = new LinkedList();
// l1.add(1);
// l1.add(2);
// l1.add(3);
// l1.add(6);
// l1.printList();

// const l2 = new LinkedList();
// l2.add(2);
// l2.add(5);
// l2.add(6);
// l2.add(7);
// l2.printList();
// const list3 = new LinkedList();
// const ll = list3.mergeSortedLists(l2, l1);

// ll.printList();
