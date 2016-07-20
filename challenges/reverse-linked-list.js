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
	var curr = head;
	var tail = head;
	var startVal = head.value;
	while (true) {
		if (curr.next === null) {
			node = new Node(curr.value);
			while (true) {
				if (endVal !== startVal) {
					if (tail.value === endVal) {
						console.log(node);
						console.log(tail);
						node.next = tail;
						tail = head;
						console.log(tail);
						console.log(tail.value);
						console.log(endVal);
						console.log(node);
						endVal = // the new tail value!
						count--;
					} else {
						tail = tail.next;
						if (tail.value === endVal) tail.next = null;
					}
				} else {
					return node;
				}
			}
		} else {
			if (curr.next.next === null) {
				var endVal = curr.value;
			}
			curr = curr.next;
		}
	}
}

// var link = {value: 2, next: {value: 3, next: {value: 4, next: {value: 5, next: null}}}}
// reverseLinkedList(link);

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
