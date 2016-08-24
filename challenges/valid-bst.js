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
// ultimately, node.left <= node.value > node.right
// need to keep track of current node on tree, first round should start with root of tree
// iterate through until left and right are null
// need to check each node and whether a node has been checked
// possible use recursion, with base condition when either left or right fail, or both are null
// visual ->       5
//               /  \
//              3    6     -> TRUE
  var beginningNode = tree.root;
  var currentNode = beginningNode;

  // left side check
  if(currentNode.left.value > currentNode.value || currentNode.right.value <= currentNode.value){
    return false;
  } else if(currentNode.left.value === null && currentNode.right.value === null){
    return true;
  } else {
    currentNode = currentNode.left;
  }

  // right side check
  if(currentNode.left.value > currentNode.value || currentNode.right.value <= currentNode.value){
    return false;
  } else if(currentNode.left.value === null && currentNode.right.value === null){
    return true;
  } else {
    currentNode = currentNode.right;
  }


}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
