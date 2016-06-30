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
	var container = {};
	var counter = 1;
	var current = head;

	while (current.next !== null){
		current = current.next;
		counter += 1;
		container[counter] = current.value; 
	}
	var props = Object.keys(container);	
	return container[props[props.length-k]];
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
