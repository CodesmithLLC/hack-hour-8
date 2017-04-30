/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be <= its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 */
 
 //output: true or false

function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function validBST(tree) {
	if(!tree.value) return true
	if(!tree.left) tree.left['value'] = 0
	if(!tree.right) tree.right['value'] = 100
	if(tree.left.value <= tree.value 
		&& tree.right.value > tree.value
		&& validBST(tree.left)
		&& validBST(tree.right)) return true;
	else return false
}

// var tree = new BinaryTree(5);
// tree.left = new BinaryTree(2)
// tree.right = new BinaryTree(8)
// tree.right.right = new BinaryTree(9)
// tree.right.left = new BinaryTree(6)
// tree.left.left = new BinaryTree(1)
// tree.left.right = new BinaryTree(3)
// tree.left.right.left = new BinaryTree(3)
// validBST(tree)

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
