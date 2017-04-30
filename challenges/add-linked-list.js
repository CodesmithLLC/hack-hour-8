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
	let l1head = l1,
			l2head = l2,
					l1 = l1.next,
					l2 = l2.next;

	// if no l1, then no need to add l2
	if (!l1) {
		return l2;
	}

	// if no l2, then no need to add l1
	if (!l2) {
		return l1;
	}

	while (l1 && l2) {
		l1 + l2head
	}


}

module.exports = {Node: Node, addLinkedList: addLinkedList};
