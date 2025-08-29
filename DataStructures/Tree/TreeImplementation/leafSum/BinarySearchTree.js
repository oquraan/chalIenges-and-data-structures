const TNode = require("./Tnode");
const BinaryTree = require("./BinaryTtree");
class BinarySearchTree extends BinaryTree {
  constructor(value) {
    super(value);
    this.root = new TNode(value);
  }

  contains(value) {
    let current = this.root;

    while (
      current.left !== null ||
      current.right !== null ||
      current.value === value
    ) {
      if (current.value === value) return true;

      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  remove(value) {
    let current = this.root;
    let pre = null;

    while (current !== null && current.value !== value) {
      pre = current;
      if (current.value < value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    // check if the the value not existe

    ////
    if (current === null) {
      console.log("Value not found in the tree");
      return this.root;
    }

    if (current === this.root) {
      this.root = null;
    }

    if (current.left === null && current.right === null) {
      if (pre.left === current) {
        pre.left = null;
      } else if (pre.right === current) {
        pre.right = null;
      }
    } else if (current.left === null && current.right) {
      // let child = current.left !== null ? current.left : current.right;
      if (pre.left === current) {
        pre.left = current.right;
      } else if (pre.right === current) {
        pre.right = current.right;
      }
    } else if (current.right === null && current.left) {
      // let child = current.left !== null ? current.left : current.right;
      if (pre.left === current) {
        pre.left = current.left;
      } else if (pre.right === current) {
        pre.right = current.left;
      }
    } else {
      if (pre.left === current) {
        // pre.left = current.left;

        let node1 = current.right;
        let node2 = current.left;

        current.left = null;
        current.right = null;

        pre.left = node1;
        node1.left = node2;
      } else if (pre.right === current) {
        // pre.right = current.left;
        let node1 = current.right;
        let node2 = current.left;

        current.left = null;
        current.right = null;

        pre.right = node1;
        node1.left = node2;
      }
    }
  }
  remove1(value) {
    let current = this.root;
    let pre = null;

    while (current !== null && current.value !== value) {
      pre = current;
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    if (current === null) {
      console.log("Value not found in the tree");
      return this.root;
    }

    if (
      current === this.root &&
      current.left === null &&
      current.right === null
    ) {
      this.root = null;
      return this.root;
    }
    // if the current   does not  have any childe
    if (current.left === null && current.right === null) {
      if (pre.left === current) {
        pre.left = null;
      } else {
        pre.right = null;
      }
    }
    // if the current have childe in  right
    else if (current.left === null) {
      if (pre.left === current) {
        pre.left = current.right;
      } else {
        pre.right = current.right;
      }
    }
    //if thecurrent hae one childe in left
    else if (current.right === null) {
      if (pre.left === current) {
        pre.left = current.left;
      } else {
        pre.right = current.left;
      }
    }
    // if the current have tow childe
    else {
      let minParent = current;
      let minNode = current.right;
      while (minNode.left !== null) {
        minParent = minNode;
        minNode = minNode.left;
      }
      current.value = minNode.value;

      if (minParent.left === minNode) {
        minParent.left = minNode.right;
      } else {
        minParent.right = minNode.right;
      }
    }

    ///////////////////////////////

    // let preCurrent = current;
    // let minCurrent = current.right;

    // while (minCurrent) {
    //   preCurrent = minCurrent;
    //   minCurrent = minCurrent.left;
    // }
    // current.value = minCurrent.value;
    //   if (minParent.left === minNode) {
    //     minParent.left = minNode.right;
    //   } else {
    //     minParent.right = minNode.right;
    //   }

    ////

    return this.root;
  }
  insert(value) {
    if (value === null || value === undefined) {
      console.log("Invalid value, cannot insert:", value);
      return "Invalid value, cannot insert:" + value;
    }
    this.insertNodeHelper(this.root, value);
  }

  insertNodeHelper(node, value) {
    if (value < node.value) {
      if (!node.left) {
        node.left = new TNode(value);
      } else {
        this.insertNodeHelper(node.left, value);
      }
    } else {
      if (!node.right) {
        node.right = new TNode(value);
      } else {
        this.insertNodeHelper(node.right, value);
      }
    }
  }

  FindSecoundMax() {
    if (this.root === null) return "Tree is empty ";
    if (this.root.left === null && this.root.right === null)
      return "You have one node   " + this.root.value;

    let current = this.root;
    let pre = null;

    while (current.right) {
      pre = current;
      current = current.right;
    }

    if (current.left) {
      let current2 = current.left;
      let pre2 = null;
      while (current2.right) {
        pre2 = current2;
        current2 = current2.right;
      }
      return current2.value;
    }

    return pre.value;
  }

  FindSecondMaxRecursively() {
    if (this.root === null) return "Tree is empty ";
    if (this.root.left === null && this.root.right === null)
      return "You have one node   " + this.root.value;

    const values = [];

    this.InOrder(this.root, values);

    if (values.length < 2) return "You have one Node  ";

    const uniqueArray = [...new Set(values)];
    if (uniqueArray.length < 2)
      return "You have three node than tow unique values  .";
    for (let index = 0; index < uniqueArray.length; index++) {
      if (uniqueArray[index] < 0) return "The tree contain nagative value ";
    }

    return uniqueArray[uniqueArray.length - 2];
  }
}

module.exports = BinarySearchTree;
