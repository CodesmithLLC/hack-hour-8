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

function validBST(tree) {
  // base case: when we run out of nodes
  if (!tree.left || !tree.right) return true;

  // the value of all the nodes in its left tree must be <= its value
  if (tree.left != null && tree.left.value > tree.value) return false;

  // the value of all the nodes in its right tree must be > its value
  if (tree.right != null && tree.right.value < tree.value) return false;

  // call it up recursively to check all the way down (up) the tree
  if (!validBST(tree.left) || !validBST(tree.right)) return false;

  return true;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
