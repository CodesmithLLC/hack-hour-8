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
  var arr = []

  var l1value = l1.value;
  var l2value = l2.value;
  while (value !== undefined) {
    arr.push(l1value + l2.value);
    l1value = l1value.next.value;
    l2value = l2value.next.value;
  }

  // var newList;
  // var tail;
  // arr.forEach(function(item) {
  //   newList = new Node(item);
  //   tail = newList.next;

  // });
  console.log(arr);
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
