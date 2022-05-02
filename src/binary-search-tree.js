const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.tree = null;
}

root() {
    return this.tree;
}

add(data) {
    const addNode = tree => {
        if (tree === null) {
            this.tree = new Node(data);
        } else if (data < tree.data) {
            if (tree.left === null) {
                tree.left = new Node(data);
            } else {
                addNode(tree.left)
            }
        } else if (data > tree.data) {
            if (tree.right === null) {
                tree.right = new Node(data);
            } else {
                addNode(tree.right)
            }
        }
    }
    addNode(this.tree)
}

has(data) {
    return this.find(data) !== null;
}

find(data, root = this.tree) {
    let node = root;
    while (node !== null) {
        if (node.data === data) {
            return node;
        } else if (data < node.data) {
            node = node.left;
        } else if (data > node.data) {
            node = node.right;
        }
    }
    return null
}

remove(data, root = this.tree) {
    if (!this.has(data)) return;
    if (!root) {
        return null;
    }

    if (data < root.data) {
        root.left = this.remove(data, root.left);
    } else if (data > root.data) {
        root.right = this.remove(data, root.right);
    } else {
        if (!root.left) {
            return root.right;
        } else if (!root.right) {
            return root.left;
        } else {
            root.data = this.min(root.right);
            root.right = this.remove(root.data, root.right);
        }
    }

    return root;

}

min(root = this.tree) {
    if (root === null) return null;
    let min = root.data,
        node = root;

    while (node.left !== null) {
        min = node.left.data;
        node = node.left;
    }

    return min;
}

max() {
    if (this.tree === null) return null;
    let max = this.tree.data,
        node = this.tree;

    while (node.right !== null) {
        max = node.right.data;
        node = node.right;
    }

    return max;
}
}

module.exports = {
  BinarySearchTree
};