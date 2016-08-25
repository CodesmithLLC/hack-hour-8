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
  let head = this.head
  let current = head
  let previous = head
  //is each node object, or array ?
  if(!head) {
  	this.head={value: val, previous: null, next: null}
  }
  else {
  	while(current.next && current) {
  		previous = current;
  		current=current.next;
  	}
  	current.next = {value: val, previous: current, next: null}
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  
};

module.exports = LinkedList;

