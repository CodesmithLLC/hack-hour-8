/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

 /*
Initial Approach:
1. Loop through the linked list using while putting each object in an array using unshift.
2. Go through array using a for loop and change this.next to 'i+1' object.
3. Return new head with reversed linkedlist


 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
  var container = [];
  var node = head;
  
  while(node){
  	container.unshift(node);
  	node = node.next;
  }

  for(var i = 0; i < container.length-1; i++) {
  	container[i].next = container[i+1];
  }

  return container[0];

}


module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
