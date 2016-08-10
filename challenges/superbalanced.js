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
	if(typeof tree === 'undefined') {
		return undefined
	}
	//recursively scan down tree checking for highest value
	//compare heights? check is difference in total is <= 1
	function depthCheckerLeft(node) {
		node = newBinaryTree()
		if(!node) {
			return 0
		}
		return 1 + (depthChecker(tree.left) 
	}
	function depthCheckerRight(node) {
		node = newBinaryTree()
		if(!node) {
			return 0
		}
		return 1 + (depthChecker(tree.right) 
	}
}
//check if tree isn't null
//check if L and R of tree are balanced and check the height/depth of each sub tree

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
