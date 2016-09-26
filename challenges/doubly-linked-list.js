/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val) {
  if (!this.head) this.head = this.tail = new Node (val);
  else {
  let holder = this.tail;
  this.tail.next = new Node(val);
  this.tail = new Node(val);
  this.tail.prev = holder;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let current = this.head;
  while (current.next) {
  	if (current.val === val) {
  		current.prev.next = current.next;
  	}
  	else current = current.next;
  }
};

module.exports = LinkedList;
