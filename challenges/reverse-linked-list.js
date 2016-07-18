/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
  var tempCurr = Object.assign({}, head);

  ////////////Loop////////////
  while(tempCurr.next != null){
    head = tempCurr.next;
    head.next = tempCurr;
    tempCurr = tempCurr.next;
  }
  ////////////////////////////

  //This seems wrong, another way I thought of doing this, though it's
  //not that great on time complexity, is to loop through the list, and augment 
  //nodes with 'prev' and a final 'tail' value, then start from tail of list, and 
  //loop back up and start switching the 'next' and 'prev' properties.
  return head;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
