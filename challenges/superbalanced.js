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
function superbalanced(tree) {
	if (tree.left === null && tree.right === null) return true;
	let height = 0;
	let counter = 0;
	const checkKids = (elm, ctr) => {
		if(!elm.left && !elm.right) return height;
		else {
				ctr++;
				if (height < ctr) height = ctr;
				if (elm.right) checkKids(elm.right, ctr);
				if (elm.left) checkKids(elm.left, ctr)
				return height;
			}
	}
	let left = checkKids(tree.left, counter);
	let right = checkKids(tree.right, counter)
	return Math.abs(left - right) > 1 ? false : true;
}

/*
initialize a counter? Or separate counters for left & right?
*/
module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
