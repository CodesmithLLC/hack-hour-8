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
	let newNode = new Node(val);

  if (!this.head) {
  	this.head = newNode;
  } else if (!this.tail) {
  	this.tail = newNode;
  } else {
  	// if there is an existing node, add node to end of list
  	this.tail.next = newNode;
  	newNode.prev = this.tail;
  	this.tail = newNode;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
	let current = this.head;

  // Hack Hour solution
  while (current) {

    // If our current node matches the value we're looking for
    if (current.val === val) {
      // Removing the head node
      if (current === this.head) {
        this.head = current.next;
        this.head.prev = null;
      }
      // Removing the tail node
      else if (current === this.tail) {
        this.tail = current.prev;
        this.tail.next = null;
      }
      else {
        current.prev.next = current.next;
        current.next.prev = current.prev;
      }
      return this;
    }

    current = current.next;
  }


  // Binh's approach
	// this.head = current.next;

	// if (!this.head) {

	//   while (current.next) {
	//   	// if next node contains inputted value
	//   	if (nextNode.val === val) {
	//   		// set current pointer two nodes down the list to skip the target value
	//   		current.next = newNode.next;
	//   	}
	//   	current = current.next;
	//   }
	// }
};

module.exports = LinkedList;
