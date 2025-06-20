const LinkedList = require("./linkedList");
require("./reverse/reverse.js");
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

list.printList();
list.Reverse();
list.printList();
