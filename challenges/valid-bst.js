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
	return validate(root, -Infinity, Infinity);
}

function validate = function(node, min, max){
	if(node === null){
        return true;
    }
    
    if(node.val <= min || node.val >= max){
        return false;
    }
    return validate(node.left,min,node.val) && validate(node.right,node.val,max);
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
