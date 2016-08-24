/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 8 -> 0 -> 8
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  // add L1.head + L2.head... store as new linked list?
  // then traverse until l2.next && l1.next === null?
  // return linked list...
  var sumLinkedList = {
    head : new Node(l1.head + l2.head),
    tail : this.head
  }
  var currentNodeSum = sumLinkedList.head;
  var currentL1Node = l1.head;
  var currentl2Node = l2.head;
  while (currentL1Node !== null && currentl2Node !== null) {
    currentNodeSum.next = new Node(currentL1Node.value + currentl2Node.value);
    currentL1Node = currentL1Node.next;
    currentl2Node = currentl2Node.next;
    currentNodeSum = currentNodeSum.next;
  }
  return sumLinkedList;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
