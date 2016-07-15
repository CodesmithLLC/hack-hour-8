

/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
	if(!l1.val) return l2;
	if(!l2.val) return l1;
	var l1Node = new Node(l1);
	l1Node.next = l1.next;
	var l2Node = new Node(l2);
	l2Node.next = l2.next;
	var l3 = new Node(l1.val);
	var l3Node = new Node(l3);
	l3Node.next = l3.next;
	var which = 1;
	while(l1Node.next || l2Node.next){
		if (which === 1) {
			l1jump(l1Node);
			l3Add(l1Node);
			which++;	
		} else {
			l2jump(l2Node);
			l3Add(l2Node);
			which--;
		}
	}
	return l3;
}

function l1jump(l1Node){
	l1Node = l1Node.next;
	l1Node.next = l1Node.next.next;
}

function l2jump(l2Node){
	l2Node = l2.node.next;
	l2Node.next = l2Node.next.next;
}

function l3Add(lNode){
	l3Node.next = lNode;
	l3Node = lNode;
}

console.log(zip({val: 1, next: {val: 2, next: { val: 3}}},{val: 4, next: {val: 5, next: { val: 6}}}));

module.exports = {Node: Node, zip: zip};
