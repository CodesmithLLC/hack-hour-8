/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  height() {
    if (!this.left && !this.right) return 0;
    if (!this.left) return this.right.height() + 1;
    if (!this.right) return this.left.height() + 1;
    return Math.max(this.left.height(), this.left.height()) + 1;
  }
}

function superbalanced(tree) {
  // need to finish, definitely need a lot more logic

  if (!tree.left && !tree.right) return true;
  if (tree.left && tree.right) return tree.left - tree.right < 1;
  if (tree.left || tree.right) {
    const exists = !tree.left ? tree.right : tree.left;
    return exists.height < 1;
  }

  return true;
}

module.exports = {
  BinaryTree: BinaryTree,
  superbalanced: superbalanced
};
