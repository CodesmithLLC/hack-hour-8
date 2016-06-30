/**
 * Write a function that takes an integer and the head of a singly linked list,
 * and returns the VALUE kth to last node in the list.
 *
 * var a = new Node('A');
 * var b = new Node('B');
 * var c = new Node('C');
 * var d = new Node('D');
 * var e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2,a); -> returns the node with the value 'D' (the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
	// wrapped function to traverse through linked list
	function nodeTraverse(){
		currentNode = currentNode.next;
		nodeCount++;
	}

	// start at beginning of linked list and traverse through to get length
	var nodeCount = 1;
	var currentNode = head;
	while (currentNode.next) {
		nodeTraverse();
	}

	// account for first node and k > list length
	if (nodeCount === k) return head.value;
	if (nodeCount < k) return undefined;
	
	// reset to beginning of linkedlist, traverse through to find nth to last node (targetNode)
	var targetNode = nodeCount - k;
	nodeCount = 1;
	currentNode = head;
	while (nodeCount !== targetNode) {
		nodeTraverse();
	}
	return currentNode.next.value;
}



module.exports = {Node: Node, kthToLastNode: kthToLastNode};
