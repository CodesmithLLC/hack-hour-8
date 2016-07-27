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
  // console.log(tree);
  var result = true;
  function recursive(tree) {
    if (tree.left === null && tree.right === null) {
      // console.log('both are null');
      return false;
    } else if (tree.left === null) {
      // console.log('left is null');
      return recursive(tree.right);
    } else if (tree.right === null) {
      // console.log('right is null');
      return recursive(tree.left);
    } else if (tree.left.value > tree.value || tree.right.value <= tree.value) {
      result = false;
      // console.log('returning false, tree.value: ' + tree.value);
      // console.log('left value: ' + tree.left.value);
      // console.log('right value: ' + tree.right.value);
      return false;
    } else {
      // console.log('left value: ' + tree.left.value);
      // console.log('right value: ' + tree.right.value);
      return recursive(tree.left) || recursive(tree.right);
    }
  }
  recursive(tree);
  return result;
}

// function generateTree(depth) {
//
//   if (depth === 0) {
//     return
//   }
//
//   depth = depth - 1;
//   generateTree(depth);
// }

var tree = new BinaryTree();
tree.value = 10;

tree.left = new BinaryTree();
tree.left.value = 9;
tree.right = new BinaryTree();
tree.right.value = 11;

tree.left.left = new BinaryTree();
tree.left.left.value = 8;
tree.left.right = new BinaryTree();
tree.left.right.value = 10;

tree.right.left = new BinaryTree();
tree.right.left.value = 10;
tree.right.right = new BinaryTree();
tree.right.right.value = 12;

console.log(validBST(tree));

module.exports = {
  BinaryTree: BinaryTree,
  validBST: validBST
};
