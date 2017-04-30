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

function validBST(val) {
	this.root = null;
}

validBST.prototype.add = function(val) {
	let root = this.root;

	let currentRoot = root;
	let newRoot = new BinaryTree(val);

	if(!root){
    this.root = new BinaryTree(val);
    return;
	}

	while (currentRoot) {
		// if value is less than root, add new tree to the left of it
		if (val < currentRoot.value) {
			currentRoot.left = newRoot;
		}
	}

}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
