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
  // while thru the linked list
  // save a ref of the tails to something
  // set the next to the prev head

  var reverseList = new Node(head.value);

  while (head.next !== null) {
    head = head.next;
    var newReverseHead = new Node(head.value);
    newReverseHead.next = reverseList;
    reverseList = newReverseHead;
  }
  return reverseList;
}

// var list1 = new Node('a' + 0);
// var list1Original = list1;
// for (var i = 1; i < 3; i++) {
//   list1.next = new Node('a' + i);
//   list1 = list1.next;
// }
// console.log(list1Original);
// console.log('ORIGINAIL LIST');
// console.log(list1Original);
// console.log(reverseLinkedList(list1Original));
module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
