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

<<<<<<< HEAD
 function Node(val) {
   this.value = val;
   this.next = null;
 }

 function kthToLastNode(k, head) {
 	// have two pointers
 	// have the second pointer begin iterating down the list at k behind the first iteration
 	// when the first pointer reaches .next null return the value of the node the second
 	// pointer is in

 	if (k <= 0) return null;

 	var i = 0;
 	var j = 0;

 	var node1 = head;
 	var node2 = head;

 	// iterator for 1st pointer
 	while(node1 !== null) {
 		node1 = node1.next;
 		i++;
 		if (i > k) {
 			node2 = node2.next;
 			j++;
 		}
 	}
 	if (i === k) return head.value;
 	else if (i < k) return undefined;
 	else return node2.value;
 }
=======
function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {

}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
>>>>>>> 278dfcc94ad032537ae4a7da253d4fcaa77f5518
