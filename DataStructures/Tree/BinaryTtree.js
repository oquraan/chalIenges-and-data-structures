const TNode = require("./Tnode");

class BinaryTree {
  constructor(value) {
    this.root = new TNode(value);
  }
  // insert(value) {
  //   const newNode = new TNode(value);

  //   let current = this.root;

  //   while (true) {
  //     if (value < current.left) {
  //       if (!current.left) {
  //         current.left = newNode;
  //         break;
  //       } else {
  //         current = current.left;
  //       }
  //     } else {
  //       if (!current.right) {
  //         current.right = newNode;
  //         break;
  //       } else {
  //         current = current.right;
  //       }
  //     }
  //   }
  // }
  // insert1(value, node = this.root) {
  //   const newNode = new TNode(value);

  //   // let current = this.root;

  //   if (value < current.left) {
  //     if (!node.left) {
  //       node.left = newNode;
  //     } else {
  //       node = node.left;
  //       this.insert1(value, node);
  //     }
  //   } else {
  //     if (!node.right) {
  //       node.right = newNode;
  //     } else {
  //       node = node.right;
  //       this.insert1(value, node);
  //     }
  //   }
  // }

  // insert2(value) {
  //   if (value === null || value === undefined) {
  //     console.log("Invalid value, cannot insert:", value);
  //     return "Invalid value, cannot insert:" + value;
  //   }
  //   this.insertNodeHelper(this.root, value);
  // }

  // insertNodeHelper(node, value) {
  //   if (value < node.value) {
  //     if (!node.left) {
  //       node.left = new TNode(value);
  //     } else {
  //       this.insertNodeHelper(node.left, value);
  //     }
  //   } else {
  //     if (!node.right) {
  //       node.right = new TNode(value);
  //     } else {
  //       this.insertNodeHelper(node.right, value);
  //     }
  //   }
  // }

  insert(value) {
    const newNode = new TNode(value);
    if (value === null || value === undefined) {
      console.log("Invalid value, cannot insert:", value);
      return "Invalid value, cannot insert:" + value;
    }
    if (!this.root) {
      this.root = newNode;
      return;
    }
    const queue = [this.root];
    while (queue.length > 0) {
      const current = queue.shift();
      if (!current.left) {
        current.left = newNode;
        break;
      } else {
        queue.push(current.left);
      }
      if (!current.right) {
        current.right = newNode;
        break;
      } else {
        queue.push(current.right);
      }
    }
  }

  insertBTN(value) {
    const newNode = new TNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    const queu = [this.root];

    while (queu.length > 0) {
      let current = queu.shift();
      if (!current.left) {
        current.left = newNode;
        break;
      } else {
        queu.push(current.left);
      }

      if (!current.right) {
        current.right = newNode;
        break;
      } else {
        queu.push(current.right);
      }
    }
  }
  PreOrder(root, arr = []) {
    if (!root) return;
    arr.push(root.value);
    this.PreOrder(root.left, arr);
    this.PreOrder(root.right, arr);
    // console.log(arr);

    return arr;
  }

  PostOrder(root, arr = []) {
    if (!root) return;

    this.PostOrder(root.left, arr);
    this.PostOrder(root.right, arr);
    arr.push(root.value);
    return arr;
  }
  InOrder(root, arr = []) {
    if (!root) return;

    this.InOrder(root.left, arr);
    arr.push(root.value);

    this.InOrder(root.right, arr);
    return arr;
  }
  printTree(node, prefix = "", isLeft = true) {
    if (!node) return;

    if (node.right !== null) {
      this.printTree(node.right, prefix + (isLeft ? "│   " : "    "), false);
    }

    console.log(prefix + (isLeft ? "└── " : "┌── ") + node.value);

    if (node.left !== null) {
      this.printTree(node.left, prefix + (isLeft ? "    " : "│   "), true);
    }
  }
}
module.exports = BinaryTree;
