/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be <= its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 */


//i don't know enough about trees to have this answer be correct, but I think the logic is accurate

function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function validBST(tree) {
  //create holder
  var holder = [];
  //define inorder search
  function inOrder(node){
    if (node){
      if (node.left !== null){
        inOrder(node.left);
      }
      holder.push(node.val)
    }
    if (node.right !== null){
      inOrder(node.right);
    }
    inOrder(tree.val);
  }
  //execute inOrder search
  inOrder(tree.val);
  //create array to check holder1 against, to see if it's sorted
  var holder2 = holder.sort(function(a,b){
    return a > b;
  }
  //iterate through both arrays; if they're both equal at each step then the tree is a valid tree
  for (var i = 0; i < holder.length; i++){
    var bool = true;
    if (holder[i] === holder2[i]) bool = true;
    else return false;
  }
}


module.exports = {BinaryTree: BinaryTree, validBST: validBST};
