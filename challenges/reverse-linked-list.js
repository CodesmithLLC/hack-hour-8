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
	let node = head,
			previous = null;

	// while nodes exists
	while (node) {
		
		// point to the next node as the previous
		node.next = previous;

		// set the 'previous' value to node
		previous = node;
	}

	return previous;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
