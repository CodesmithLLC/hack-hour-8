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
  var newNode = new Node(val);
  this.tail = newNode;
  if(this.head === null) {
  	this.head = newNode;
  } else {
  	var current = this.head;
  	while(current.next){
  		current = current.next;
  	}
  	newNode.prev = current;
  	current.next = newNode;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  var current = this.head;
  var tail = this.tail;
  var previous;
  if(this.head.val === val){
  	this.head = current.next;
  } else if (this.tail.val === val){
    this.tail = this.tail.prev;
    this.tail.next = null;
  } else {
    while(current ? current.val !== val : null){
        previous = current;
        current = current.next;
    }
    if(current){
      previous.next = current.next;
      current.next.prev = previous;
    }    
  }
};


module.exports = LinkedList;
