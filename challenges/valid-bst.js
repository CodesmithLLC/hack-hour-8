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

  function recurseTree(bt, elder) {

    if (!bt.right && !bt.left) {
      return true;
    }

    if (bt.left != null && bt.left.value > bt.value) {
      return false;
    }

    if (bt.left != null && elder != null && bt.left.value > elder.value) {
      return false;
    }

    if (bt.right != null && bt.right.value < bt.value) {
      return false;
    }

    if (bt.right != null && elder != null && bt.right.value < elder.value) {
      return false;
    }
    let older = bt;

    return recurseTree(bt.left, older) && recurseTree(bt.right, older);
  }

  return recurseTree(tree, null);
}

module.exports = {
  BinaryTree: BinaryTree,
  validBST: validBST
};
