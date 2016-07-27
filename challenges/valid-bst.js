/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be <= its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 */
 
 /*
  Initial approach. Write a function that evaluates a BST and return true if it's valid or false if it does not meet the rules of a valid BST.

  The function will need to 1) traverse the tree and 2) compare the value of left and right objects vs. the object's value. Task #1 will likely require a while loop to traverse. Task #2 could be a helper comparison function. The comparison helper function could potentially be called recursively.
 */

function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function validBST(tree) {
  // console.log(tree);
  // while(tree.left) {
  // //	if(tree.value < tree.left.value || tree.value >= tree.right.value) {return false}
  // 	validBST(tree.left);
  // //  validBST(tree.right);
  // }
  // return true;
}

// var test1 = new BinaryTree(3);
// var test2 = new BinaryTree(2);
// var test3 = new BinaryTree(4);
// var test4 = new BinaryTree(1);
// var test5 = new BinaryTree(3);
// var test6 = new BinaryTree(3);
// var test7 = new BinaryTree(5);

// test1.left = test2;
// test1.right = test3;
// test2.left = test4
// test2.right = test5
// test3.left = test6
// test3.right =test7

// validBST(test1);

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
