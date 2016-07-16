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

function zip(l1, l2, zip = null) {
  if (l1.next == null) {
    zip.next = l1
    return zip
  }
  else return 'zipppppp'
};
// var a = new Node(1)
// a.next = new Node(2)
// a.next.next = new Node(8)
module.exports = {Node: Node, zip: zip};
