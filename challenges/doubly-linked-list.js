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
	let node = new Node(val);
	if(!this.head){
		this.head = node;
		this.tail = node;
	} else {
		this.tail.next = node;
		node.prev = this.tail;
		this.tail = node;
	}
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
	var node = this.head
 	if(val === this.head.val) {
  		this.head = node.next;
  		return node.val;
	}
	else{
		while(val !== node.val){
			node = node.next;
		}
		if(!node.next){
			node = this.tail;
			this.tail = node.prev;
			this.tail.next = null;
		}
		node.prev.next = node.next;
		return node.val;
	}
};

module.exports = LinkedList;
