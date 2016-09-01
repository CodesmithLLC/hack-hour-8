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

function reverseLinkedList(head){
	var node = head;
	var previous = null;
	while(node){
		var temp = node.next;
		node.next = previous;
		previous = node;
		node = temp;
	}
	return previous;
}

var head = new Node(1);
var node1 = new Node(2);
head.next = node1;
var node2 = new Node(3);
node1.next = node2;
reverseLinkedList(head);

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
