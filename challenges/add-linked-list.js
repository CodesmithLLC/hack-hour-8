/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 8 -> 0 -> 8
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
	var num1="", num2="", sum, i=1;
	for(var current=l1.head;current;current=current.next){
		num1 = current.value.toString() + num1;
	}
	for(var current=l2.head;current;current=current.next){
		num2 = current.value.toString() + num2;
	}
	sum = (parseInt(num1) + parseInt(num2)).toString();

	for(var current=l1.head;current;current=current.next){
		current.value = parseInt(sum[sum.length-i]);
		i++;
	}
	
	return l1;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
