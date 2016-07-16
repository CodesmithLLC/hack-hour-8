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
  // base cases: when all nodes from one LL is exhausted, just return the rest of the other
  if (!l1) return l2;
  if (!l2) return l1;

  // use a recursive call to zip() as a way to flip between nodes from l1 and l2
  // on each successive call, l1 and l2 switch places in the arguments list
  // when we hit the base case (one of the parameters is null) we have the
  // remainder of the other list from which the recursive calls will build the
  // zipped list, in place, on the return value l1
  l1.next = zip(l2, l1.next);
  return l1;
}

module.exports = { Node: Node, zip: zip };
