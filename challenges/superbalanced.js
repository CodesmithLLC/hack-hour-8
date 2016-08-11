	/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

// helper function to check left, right heights of subtree
// if left height - right height > 1 return false
// else repeat check with left and right subtrees
// to infinity and beyond

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function superbalanced(tree) {
	var leftHeight = checkDepth(tree.left);
	var rightHeight = checkDepth(tree.right);
	if(Math.abs(leftHeight-rightHeight > 1)) return false;
	function checkDepth(subtree){
		var heights = [];
		var height = 0;
		go(subtree, height);
		function go(sub, height){
			console.log(heights);
			if (!sub.left && !sub.right){
				heights.push(height);
				return;
			}
			height++;
			if(sub.left) go(sub.left, height);
			if(sub.right) go(sub.right, height);
		}
		return Math.max.apply(null, heights);
	}
	return true;
}

var tree = new BinaryTree(0);
var tree1 = new BinaryTree(1);
var tree2 = new BinaryTree(2);
var tree3 = new BinaryTree(3);
var tree4 = new BinaryTree(4);
var tree5 = new BinaryTree(5);
var tree6 = new BinaryTree(6);
var tree7 = new BinaryTree(7);
var tree8 = new BinaryTree(8);
var tree9 = new BinaryTree(9);
var tree10 = new BinaryTree(10);
var tree11 = new BinaryTree(11);
tree.left = tree1;
tree.right = tree2;
tree1.left = tree3;
tree1.right = tree4;
tree2.left = tree5;
tree2.right = tree6;
tree3.left = tree7;
tree7.left = tree8;
tree5.left = tree9;
tree6.left = tree10;
tree6.right = tree11;
console.log(tree);
superbalanced(tree);
module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
