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


    //recursively search through tree, using boolean logic between returns to infer
    //whether tree is valid or not

    ///////////////////
    function recurseTree(bt, max, min) {

            //understand how to traverse through tree, superficially checking left and right side for 
            //specified conditions of BSTs, but for each recursion(or level traversal) a max and min need to 
            //be specified so that the tree is properly balanced through its entirety. Need to finished conditional 
            //logic for max and min checks.
            //
            // var max = tree.value;
            // var min = tree.left.value;

            if (!bt) {
                return true;
            }

            if (bt.left != null && bt.left.value > bt.value) {
                return false;
            }

            if (bt.right != null && bt.right.value < bt.value) {
                return false;
            }

            if (!recurseTree(bt.left) || !recurseTree(bt.right)) {
                return false;
            }

            return true;
        }
        ///////////////////

    return recurseTree(tree);
}

module.exports = {
    BinaryTree: BinaryTree,
    validBST: validBST
};
