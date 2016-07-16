

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
  var l1Node = new Node(l1.val);
  l1Node.next = l1.next;
  var l2Node = new Node(l2.val);
  l2Node.next = l2.next;
  var l3 = new Node(l1.val);
  var l3Node = l3;
	while(l1Node.next || l2Node.next){
		var newNewNode = new Node(l2Node.val);
		l3Node.next = newNewNode;
		l3Node = newNewNode;
		l1Node = l1Node.next;
  	l2Node = l2Node.next;
  	var newNode = new Node(l1Node.val);
    l3Node.next = newNode;
		l3Node = newNode;

	}
	console.log(l3Node);
	return l3Node;
}

console.log(zip({val: 1, next: {val: 2, next: { val: 3}}},{val: 4, next: {val: 5, next: { val: 6}}}));

module.exports = {Node: Node, zip: zip};
