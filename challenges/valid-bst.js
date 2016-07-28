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
  let currentValue = tree.value;
  let leftVal = tree.left;
  let rightVal = tree.left.right;

  while(leftVal !== null) {
    if(leftVal > currentValue || rightVal <= currentValue) {
      return false
    } else {
      currentValue = leftVal
      leftVal = currentValue.left;
      rightVal = 
    }
  }

  let currentVal = tree.value



  function check(tree) {
    if (tree.left === null && tree.right === null) {
      return;
    }

  let currentValue = tree.value;
  let leftVal = tree.left;
  let rightVal = tree.right;

    if(leftVal > currentValue || rightVal <= currentValue) {
      return false;
    } else {
      currentValue = leftVal
      leftVal = currentValue.left;
      rightVal = 
    }
  }

  let currentVal = tree.value




  }

}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
