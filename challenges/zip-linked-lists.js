/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  var current = l1;
  var l3 = new Node(current.val);
  var head = l3;
  l1 = l1.next;
  current = l2;
  while (l1 || l2) {
    node = new Node(current.val);
    head.next = node;
    head = head.next;
    if (current === l1) {
      l1 = l1.next;
      current = l2;
    } else {
      l2 = l2.next;
      current = l1;
    }
  }
  return l3;
}

module.exports = {Node: Node, zip: zip};
