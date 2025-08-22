const BinaryTree = require("./BinaryTtree");
const BinarySearchTree = require("./BinarySearchTree");

console.log("Binary Treeeeeeeeeeeeeeeeeee");
const bst = new BinaryTree(6);

bst.printTree(bst.root);
console.log("Post order  ");
console.log(bst.PostOrder(bst.root));
console.log("Pre order  ");
console.log(bst.PreOrder(bst.root));
console.log("In order  ");
console.log(bst.InOrder(bst.root));

console.log("Binary Search Treeeeeeeeeeeeeeeeeee");

const bst1 = new BinarySearchTree(6);
bst1.insert(10);

bst1.insert(5);

bst1.insert(15);

bst1.insert(4);

bst1.insert(7);

console.log("contains(6)" + bst1.contains(6));
console.log("contains(10)" + bst1.contains(10));

console.log("contains(5)" + bst1.contains(5));
console.log("contains(7)" + bst1.contains(7));
console.log("contains(15)" + bst1.contains(15));
console.log("contains(5)" + bst1.contains(5));
console.log("contains(6)" + bst1.contains(6));
console.log("contains(4)" + bst1.contains(4));
console.log("contains(7)" + bst1.contains(7));

// console.log("Post order  ");
// console.log(bst1.PostOrder(bst1.root));
// console.log("Pre order  ");
// console.log(bst1.PreOrder(bst1.root));
console.log("In order  ");
console.log(bst1.InOrder(bst1.root));
bst1.printTree(bst1.root);

console.log(bst1.FindSecoundMax());

// console.log("Before delete 6");
// bst1.printTree(bst1.root);

// console.log("After delete 6");
// // bst1.remove1(15);
// // bst1.InOrder(bst1.root);

// // bst1.printTree(bst1.root);
// bst1.remove1(6);
// bst1.InOrder(bst1.root);

// bst1.printTree(bst1.root);
const bst2 = new BinarySearchTree(20);
bst2.insert(30);
bst2.insert(25);
bst2.insert(31);
bst2.insert(33);
bst2.insert(32);
bst2.insert(34);

// bst2.insert(7);
// bst2.insert(20);

console.log("In order  ");
console.log(bst2.InOrder(bst2.root));
bst2.printTree(bst2.root);

// bst1.insert(15);

// bst1.insert(4);

// bst1.insert(7);
console.log("Using iterative fuction : " + bst2.FindSecoundMax());
console.log("Using recursive function :" + bst2.FindSecondMaxRecursively());

bst2.remove1(34);
bst2.insert(30.5);
bst2.printTree(bst2.root);

console.log("Using iterative fuction : " + bst2.FindSecoundMax());
console.log("Using recursive function :" + bst2.FindSecondMaxRecursively());

bst2.remove1(32);bst2.remove1(33);

bst2.insert(30.7);
bst2.printTree(bst2.root);

console.log("Using iterative fuction : " + bst2.FindSecoundMax());
console.log("Using recursive function :" + bst2.FindSecondMaxRecursively());
