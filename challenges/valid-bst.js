/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be <= its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 */


function BinaryTree(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function recurseTree(root, min, max) {
  if (root === null) return true;

  if (root.value > min &&
    root.value < max &&
    recurseTree(root.left, min, root.value) &&
    recurseTree(root.right, root.value, max)) return true;

  return false;
}

function validBST(tree) {
  return recurseTree(tree, -Infinity, Infinity);
}

// let tree;
// tree = new BinaryTree(10);
// tree.left = new BinaryTree(5);
// tree.left.left = new BinaryTree(3);
// tree.left.right = new BinaryTree(6);
// tree.right = new BinaryTree(14);
// console.log(validBST(tree))

module.exports = {
  BinaryTree: BinaryTree,
  validBST: validBST
};
