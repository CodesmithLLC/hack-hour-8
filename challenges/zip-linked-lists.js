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

// I don't think this is right... I'm not sure if assigning the lists to nodes was correct.
function zip(l1, l2) {
  const node1 = new Node(l1);
  const node2 = new Node(l2);

  // base cases: when all nodes from one LL is exhausted, just return the rest of the other
  if (!node1) return node2;
  if (!node2) return node1;

  // use a recursive call to zip() as a way to flip between nodes from node1 and node2
  // on each successive call, node1 and node2 switch places in the arguments list
  // when we hit the base case (one of the parameters is null) we have the
  // remainder of the other list from which the recursive calls will build the
  // zipped list, in place, on the return value node1
  node1.next = zip(node2, node1.next);
  return node1;
}

module.exports = { Node: Node, zip: zip };
