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
	var current = tree;
	return check(current);
	function check(node){
		// console.log(node.value,node.left.value,node.right.value);
		if(node.left === null && node.right === null) return true;
		if(node.value >= node.left.value){
			console.log('node left to check ',node.left);
			check(node.left);
		}
		if(node.value < node.right.value){
			console.log('node ', node.value, node.right.value);
			console.log('node right to check ',node.right);
			check(node.right);
		}
		return false;
	}
}

var binTree = new BinaryTree(10)
var binTree1 = new BinaryTree(9);
var binTree2 = new BinaryTree(11);
var binTree3 = new BinaryTree(8);
var binTree4 = new BinaryTree(10);
var binTree5 = new BinaryTree(10);
var binTree6 = new BinaryTree(8);
binTree.left = binTree1;
binTree.right = binTree2;
binTree1.left = binTree3;
binTree1.right = binTree4;
binTree2.left = binTree5;
binTree2.right = binTree6;
console.log(validBST(binTree));

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
