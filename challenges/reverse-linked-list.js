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
  let current = this.head;
  let holder = [];
  let counter = 0;
  let answer;

  // create copy of linked list
  while (current.next) {
    holder.push(current.value);
    current = current.next;
  }

  // assign last element of copy to the new linked list
  answer = new Node(holder[holder.length-1]);

  // set pointer to head of new linked list
  current = answer;

  // iterate through copy of linked list backwards and those values to new linked list
  for (var i = holder.length-2; i >= 0; i--) {
    current.next = new Node(holder[i]);
    current = current.next;
  }
  // return new linked list
  return answer;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
