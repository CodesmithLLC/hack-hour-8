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
  // edge case check: either the LL doesn't exist or it's only one node
  if (!head || !head.next) {
    return head;
  }

  let prev = null;
  let current = head;
  let holder;

  // while a node exists, perform the swaps
  while (current) {
    holder = current.next;
    current.next = prev;
    prev = current;
    current = holder;
  }

  const revList = prev;
  return revList;
}

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
