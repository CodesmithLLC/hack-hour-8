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
  if (!l1.head && !l2.head) throw new Error('nothing to zip');
  if (!l1.head && l2.head) return l2;

  let node1 = l1.head;
  let node2 = l2.head;
  let temp = l1.head.next;

  while (node1.next && node1.next.next) {
    node1.next = new Node(node2.value);
    node1.next.next = temp;
    node1 = node1.next.next;
    node2 = node2.next;
    temp = node1.next;
  }

  return l1;
}

function zipInplace(l1, l2) {
  if (!l1.head && !l2.head) throw new Error('nothing to zip');
  if (!l1.head && l2.head) return l2;

  let node1 = l1.head;
  let node2 = l2.head;
  let temp1;
  let temp2;

  while (node1.next && node1.next.next) {
    temp1 = node1.next;
    temp2 = node2.next;
    node1.next = node2;
    node1.next.next = temp1;
    node2 = temp2;
    node1 = node1.next.next;
  }
}

module.exports = { Node: Node, zip: zip };
