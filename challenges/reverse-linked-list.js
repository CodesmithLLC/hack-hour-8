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
    this.prev = null;
}

function reverseLinkedList(head){
	var currentNode = head;
	// traverse to end of list
	while (currentNode.next){
		var temp = currentNode;
		currentNode = currentNode.next;
		currentNode.prev = temp;
	}
	// set head of new list to end of original list
	var newHead = new Node(currentNode.value);
	newHead.next = currentNode.prev;
	currentNode = currentNode.prev;
	// traverse backwards through original list, adding each node to new list
	while(currentNode.value){
		newHead.next = currentNode;
		newHead = currentNode;
		// var newNode = new Node(currentNode.value);
		// newNode.next = currentNode.prev;
		currentNode = currentNode.prev;
	}
	return newHead.value;
}

var head = new Node(1);
var node1 = new Node(2);
head.next = node1;
node1.prev = head;
var node2 = new Node(3);
node1.next = node2;
node2.prev = node1;
console.log(node2);
reverseLinkedList(head);

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
