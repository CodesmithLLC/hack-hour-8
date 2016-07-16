/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped
list be
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

  if (l1 === undefined) {return l2}
	if (l2 === undefined) {return l1}

	let comb = l1
	let curr;
	l1 = l1.next

	while (l1 && l2){
		comb.next = l2;
		curr = comb.next;
		l2 = l2.next
		l1 = l1.next
		// comb.next.next = l1

	}
	return comb;

};

module.exports = {Node: Node, zip: zip};
