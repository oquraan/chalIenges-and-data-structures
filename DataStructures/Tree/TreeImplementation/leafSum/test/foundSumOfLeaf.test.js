const BinaryTree = require("../BinaryTtree");
const BinarySearchTree = require("../BinarySearchTree");
test("Test calculating the sum of all leaf nodes ", () => {
  const bst = new BinaryTree(6);
  bst.insert(10);

  bst.insert(5);

  bst.insert(15);

  bst.insert(4);

  bst.insert(7);
  expect(bst.LeafSum(bst.root)).toBe(26);
});
test("Test calculating the sum of all leaf nodes in a binary tree using example with negative leaf values.  ", () => {
  const bst = new BinaryTree(6);
  bst.insert(10);

  bst.insert(5);

  bst.insert(15);

  bst.insert(-4);

  bst.insert(-6);
  expect(bst.LeafSum(bst.root)).toBe(5);
});
