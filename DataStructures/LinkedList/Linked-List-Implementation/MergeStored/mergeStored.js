const LinkedList = require("../linkedList");

LinkedList.prototype.mergeSortedLists = (list1, list2) => {
  let list3 = new LinkedList();
  // list1.printList();
  // list2.printList();
  // console.log(list1.head);
  console.log(list1.last.data);
  if (list1.size !== 0 && list2.size !== 0) {
    list1.last.next = list2.head;
    list3.head = list1.head;
  } else if (list1.size !== 0) {
    list1.last.next = list2.head;

    list3.head = list1.head;
  } else if (list2.size !== 0) {
    list1.last.next = list2.head;

    list3.head = list2.head;
  } else {
    console.log("Please check of your lists are empty ");
  }
  // console.log(list1.head);
  list1.printList();

  // list3.head = list1.head;
  // list3.printList();

  ////////this is to foind the minimum
  let min = list3.head;
  let curent = list3.head;
  let nextNode = curent.next;
  let list4 = new LinkedList();
  //////////////////////////////////////
  //these are to put to store

  let pre = list3.head;
  let nex = curent;

  while (curent !== null) {
    while (nextNode !== null) {
      if (nextNode.data < min.data) {
        min = nextNode;
      }
      pre = nextNode;
      nextNode = nextNode.next;
    }

    // nextNode.next=head;
    head = min;
    pre.next = null;
    min.next = curent;

    console.log(min);
    // list4.add(min);
    curent = curent.next;
    if (curent && curent.next && curent.next) {
      nextNode = curent.next;
    }
  }
  list4.printList();
};

LinkedList.prototype.mergeSortedLists = (list1, list2) => {
  let list3 = new LinkedList();

  let p1 = list1.head;
  let p2 = list2.head;

  if (p1 === null && p2 === null) {
    console.log("these lists are empty  ");
    return;
  } else if (p1 === null) {
    console.log("the first  list is empty  empty  ");
    list2.printList();
    return;
  } else if (p2 === null) {
    console.log("the secound list is  empty  ");
    list1.printList();
    return;
  }

  while (p1 !== null && p2 !== null) {
    if (p1.data < p2.data) {
      list3.add(p1.data);
      p1 = p1.next;
    } else {
      list3.add(p2.data);
      p2 = p2.next;
    }
  }

  while (p1 !== null) {
    list3.add(p1.data);
    p1 = p1.next;
  }

  while (p2 !== null) {
    list3.add(p2.data);
    p2 = p2.next;
  }

  return list3;
};
