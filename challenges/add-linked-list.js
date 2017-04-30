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
	let num1 = '', num2 = '';
	const add = (list, str) => {
		while (list) {
			str = list.value + str;
			list = list.next;
		}
		return str;
	}
	num1 = add(l1, num1);
	num2 = add(l2, num2);
	const sum = (parseInt(num1) + parseInt(num2)).toString();
	const arr = sum.split('');
	let res = new Node();
	const build = (list, array) => {
		while (array.length > 0) {
			list.value = array.shift();
			list.next = new Node();
			build(list.next, array)
		}
	}
	build(res, arr);
	return res;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
