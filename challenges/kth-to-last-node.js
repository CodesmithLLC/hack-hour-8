/**
 * Write a function that takes an integer and the head of a singly linked list,
 * and returns the VALUE kth to last node in the list.
 *
 * var a = new Node('A');
 * var b = new Node('B');
 * var c = new Node('C');
 * var d = new Node('D');
 * var e = new Node('E');
 * var f = new Node('F');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 * e.next = f;
 * kthToLastNode(2,a); -> returns the node with the value 'D' (the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
	
	var counter = 1;
	head.counter = counter;
	//console.log(head.next)
	function moving(node){
		if (node.next) {
			counter++;
			node.count = counter
			console.log(node.count)
			moving(node.next);
		}
		else return node.counter;
	}
	moving(head)
	function n(x) {
		if (n.count === counter - k) return n;
		else n(x.next)
	}
	return n(head);
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};

//create counter for every time next = true
//use counter as index
//search until next = false
//return index - 2?

