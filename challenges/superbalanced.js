/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function superbalanced(tree) {

  //traverse-left side
    //count how many levels deeps it goes
      //save it

  //traverse-right side
    //count how many levels deep it goes
      //save it somever

  //substract the one sides deep levels from the other if its 0 or 1 as the difference
    //then tree is superbalanced
  // else its not.
  function inOrder(node){
    if (node){

      //traverse the left subtree
      if (node.left !== null){
          inOrder(node.left);
      }            

        //traverse the right subtree
        if (node.right !== null){
            inOrder(node.right);
        }
    }
}

//start with the root  
}

inOrder(tree);
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
