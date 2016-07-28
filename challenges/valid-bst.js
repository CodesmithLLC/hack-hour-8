/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be <= its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 */
 
 /*
  Initial approach. Write a function that evaluates a BST and return true if it's valid or false if it does not meet the rules of a valid BST.

  The function will need to 1) traverse the tree and 2) compare the value of left and right objects vs. the object's value. Task #1 will likely require a while loop to traverse. Task #2 could be a helper comparison function. The comparison helper function could potentially be called recursively.
 */

function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function validBST(tree) {
  if(!tree) {
    return true;
  }

  if(tree.left !== null && tree.value<tree.left.value) {
    return false;
  }

  if(tree.right !== null && tree.value >= tree.right.value) {
    return false;
  }

  if(validBST(tree.left)) {
    return validBST(tree.right);
  }
  

}


module.exports = {BinaryTree: BinaryTree, validBST: validBST};
