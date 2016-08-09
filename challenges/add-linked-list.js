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
  const num1 = [];
  const num2 = [];
  let current;

  for (current = l1.head; current; current = current.next) {
    num1.unshift(current.value);
  }

  for (current = l2.head; current; current = current.next) {
    num2.unshift(current.value);
  }

  return parseInt(num1.join(''), 10) + parseInt(num2.join(''), 10);
}

module.exports = { Node: Node, addLinkedList: addLinkedList };
