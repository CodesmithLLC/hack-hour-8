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
	
	function lowestSeach(node){
		if(node.next !== null){
			node = node.next;
			return lowestSearch(node);
		}
		else(node.next === null){
			
		}
	}
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
