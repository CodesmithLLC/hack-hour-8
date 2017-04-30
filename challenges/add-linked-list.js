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
  const res = new Node(l1.value + l2.value);
  let temp = res;

  temp = temp.next;
  l1 = l1.next;
  l2 = l2.next;

  while (l1 && l2) {
    temp.next = new Node(l1.value + l2.value);
    temp = temp.next;
    l1 = l1.next;
    l2 = l2.next;
  }

  return res;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
