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
	if(!tree) return false

	//if tree.left !== null && tree.left <= tree.val
		//then validBST(tree.left)(recursion)
	//if tree.right !== null && tree.right > tree.val
		//then validBST(tree.right)(recursion)

}
//if .left isn't null and is less than val
//if .right isn't null and is greater than its value
//if no node return false
//go through input tree,
//test that each node meets conditons

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
