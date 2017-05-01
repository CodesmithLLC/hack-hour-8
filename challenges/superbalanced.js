/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function superbalanced(tree) {
/* Approach: 
I think we need to run this balance check on each individual node, sounds like recursion.
So we would build an inner function that increments a counter if .left exists, increments another 
counter if .right exists, and call that inner function 
on each child of each node, to handle all children as opposed to simply far left and far right. 
Create 2 counters, increment 1 counter if root.left exists, increment again for each level of left
children, do the same with root.right, var ans = counter 1 - counter 2.  If ans < 2 && ans > -2 return 
true, else return false.  


*/
  let node = tree, counterL = 0, counterR = 0, res = true, heightRes = 0; 
  if (!node) return true; 
  function checkBalance(node){
    if (node.right) counterR++; 
    if (node.left) counterL++;
  }
  if (res === false) return false;
  if (node.left && node.right){
   checkBalance(node.left) && checkBalance(node.right); 
 }
  if (node.left && !node.right) checkBalance(node.left); 
  if (!node.left && node.right) checkBalance(node.right); 
  heightRes = counterR - counterL; 
  if (res === true && Math.abs(heightRes) < 2) return true; 
  else return false; 
}
module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
