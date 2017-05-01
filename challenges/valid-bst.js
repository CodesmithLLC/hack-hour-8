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
/*APPROACH: we know it's valid if this.left <= this.value throughout the tree && this.right is greater than this.value throughought 
the tree.  So we could write a function that traverses the length of the tree and if ever we find this.left > this.value || 
this.right <= this.value we return false, otherwise we return true.  Edge case: binary tree has 1 node, return true.   
*/


/*
//To recurse, what is base case?  When .left and .right are null, we've reach the bottom of 1 branch(root?).  If we call BST
on any existing .left and .right children, we should cover all nodes.  I had plenty of trouble in execution of this strategy. If 
.left > .value or .right <= .value return false.  Run through all nodes with that logic, if you get through all nodes without hitting 
a false, return true.  
*/
 
    let curr = tree; 

    if (curr.left > curr.value || curr.right <= curr.value) return false;
    if (curr.left && curr.right){
        validBST(curr.left) && validBST(curr.right);
    }
    else if (curr.left && !curr.right) validBST(curr.left);
    else if (curr.right && !curr.left) validBST(curr.right);
    return true; 
 
}





module.exports = {BinaryTree: BinaryTree, validBST: validBST};
