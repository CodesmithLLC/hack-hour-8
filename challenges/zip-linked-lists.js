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
var current;
var holder;
var values = [];
	
var getValues = function() {
	var current = l2;
	while (current.next !== null) {
		values.push(current.value);
		current = current.next;
	}
	if (current.next === null) values.push(current.value);
	return values;
}


function insertValues () {
	current = l1;
	var i = 0;
	while (current.next !== null) {
		holder = current.next;
		current.next = new Node(values[i]);
		current = current.next;
		current.next = holder;

		i++;
		current = current.next;
	}
	
	if (current.next === null) current.next = new Node(values[i]);
	return;
}

getValues();
insertValues();
return l1;
	
};

module.exports = {Node: Node, zip: zip};
