const BinaryTree = require("../BinaryTtree");
const BinarySearchTree = require("../BinarySearchTree");
test("Check if the Tree is empty in Secound  Max  ", () => {
  const bst = new BinarySearchTree(6);
  bst.remove1(6);

  expect(bst.FindSecondMaxRecursively()).toBe("Tree is empty ");
});
test("check if thee tree have one node  ", () => {
  const bst = new BinarySearchTree(6);

  expect(bst.FindSecondMaxRecursively()).toBe(
    "You have one node   " + bst.root.value
  );
});
test("Check if the treee have nagative value  ", () => {
  const bst = new BinarySearchTree(6);
  bst.insert(-10);

  bst.insert(5);

  bst.insert(15);
  expect(bst.FindSecondMaxRecursively()).toBe(
    "The tree contain nagative value "
  );
});
