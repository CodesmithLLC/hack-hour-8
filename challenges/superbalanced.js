/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

 /*
Approach: 
Superbalanced function will return true (if balanced) or false (if not balanced).
If the tree is empty (null), return true
If the tree is not empty, traverse left and right trees and if the difference between 
min height and max height from root is greater than 1 return false else return true.
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function superbalanced(tree) {
  if(tree === null) {
  	return true;
  }

  var height = [];


}


module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
