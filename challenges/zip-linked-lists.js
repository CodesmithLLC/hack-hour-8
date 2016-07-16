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
  var currentList = l1;
  var count = 0;
  var l3 = new Node(currentList.val);
  l1 = l1.next;
  currentList = l2;
  while (count < 5) {
    node = new Node(currentList.val);
    console.log(node);
    l3.next = new Node
    l3.next = node;
    console.log(l3);
    if (currentList === l1) {
    	l1 = l1.next;
    	currentList = l2;
    } else {
    	l2 = l2.next;
    	currentList = l1;
    }
    count++;
  }
  return l3;
}

module.exports = {Node: Node, zip: zip};
