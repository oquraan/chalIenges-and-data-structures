const BinaryTree = require("../BinaryTtree");
const BinarySearchTree = require("../BinarySearchTree");
test("Check if the Pre Order Work ", () => {
  const bst = new BinaryTree(6);
  bst.insert(10);

  bst.insert(5);

  bst.insert(15);

  bst.insert(4);

  bst.insert(7);
  expect(bst.PreOrder(bst.root)).toEqual([6, 10, 15, 4, 5, 7]);
});
test("Check if the Post Order Work ", () => {
  const bst = new BinaryTree(6);
  bst.insert(10);

  bst.insert(5);

  bst.insert(15);

  bst.insert(4);

  bst.insert(7);
  expect(bst.PostOrder(bst.root)).toEqual([15, 4, 10, 7, 5, 6]);
});
test("Check if the In Order Work ", () => {
  const bst = new BinaryTree(6);
  bst.insert(10);

  bst.insert(5);

  bst.insert(15);

  bst.insert(4);

  bst.insert(7);
  expect(bst.InOrder(bst.root)).toEqual([15, 10, 4, 6, 7, 5]);
});
test("Test adding a node null ", () => {
  const bst = new BinaryTree(6);

  expect(bst.insert(10)).toBe();
});
test("Test adding a node ", () => {
  const bst = new BinaryTree(6);

  expect(bst.insert(null)).toBe("Invalid value, cannot insert:" + null);
});

test("Check if the In Contain value ", () => {
  const bst = new BinarySearchTree(6);
  bst.insert(10);

  bst.insert(5);

  bst.insert(15);

  bst.insert(4);

  bst.insert(7);
  expect(bst.contains(4)).toBe(true);
  // expect(bst.contains(100)).toBe(false);
});

test("Remove the value  ", () => {
  const bst = new BinarySearchTree(6);
  bst.insert(10);

  bst.insert(5);

  bst.insert(15);

  bst.insert(4);

  bst.insert(7);
  bst.remove1(7);
  expect(bst.PreOrder(bst.root)).toEqual([6, 5, 4, 10, 15]);
});
