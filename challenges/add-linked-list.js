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
    let ll1tot = [];
  	let ll2tot = [];
  	let curr1 = l1;
  	let curr2 = l2;

  	while (curr1.next) {
  		ll1tot.unshift(curr1.value);
  		curr1 = curr1.next;
  	}
  	ll1tot.unshift(curr1.value);

  	while (curr2.next) {
  		ll2tot.unshift(curr2.value);
  		curr2 = curr2.next;
  	}
  	ll2tot.unshift(curr2.value);

  	let newlltot = (+ll2tot.join("") + +ll1tot.join("")).toString();

  	newlltot.split("").reverse();

  	let retLL = new Node(newlltot[0]);
  	let tail = retLL
  	for (let i=1; i < newlltot.length; i++){
  		tail.next = new Node(newlltot[i]);
  		tail = tail.next;
  	}
  	return retLL;

}

module.exports = {Node: Node, addLinkedList: addLinkedList};
