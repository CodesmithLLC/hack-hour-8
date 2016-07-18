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
	var previous = null;
	if(!head) return null;
	//switch pointers method...
	while(head.next) {
	var next = head.next;
	head.next = previous;
	previous = head;		//draw it out when given more time to test if this works!!!!!
	head = next;
	}
	head.next = previous
	return head

}
//head will be new tail
//one way: starting at head, say, node 5, bring each node starting from node one ahead of node 5 until they're in order
//2: create new list, get length, starting from top of list push nodes to list in descending order
//3: use some kind of sorting method? 
//can call reverse() method?
//input: 1 -> 2-> 3-> 4-> 5 -> 6
//output:
//1 <- 2 <- 3 <- 4 <- 5 <- 6
//possible to just flip pointers?

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
