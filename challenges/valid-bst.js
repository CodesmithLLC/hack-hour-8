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
// var three = new BinaryTree(3)
// var two = new BinaryTree(2)
// var one = new BinaryTree(1)
// var four = new BinaryTree(4)
// var six = new BinaryTree(6)
// var seven = new BinaryTree(7)
// var eight = new BinaryTree(8)
// var nine = new BinaryTree(9)

// tree.left = two
// tree.right = eight
// tree.right.right = nine
// tree.right.left = six
// tree.left.left = one
// tree.left.right = three
// tree.left.right.left = three
// console.log(tree)
// validBST(tree)

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
