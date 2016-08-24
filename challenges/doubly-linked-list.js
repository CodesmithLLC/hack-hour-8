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
  if (this.head) {
    this.tail.next = new Node(val);
    this.tail.next.prev = this.tail;
    this.tail = this.tail.next;
  } else {
    this.head = this.tail = new Node(val);
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  if (this.head.val === val) {
    this.head = this.head.next;
    this.head.prev = null;
    return;
  }

  let node = this.head.next;
  while (node) {
    if (node.val === val) {
      node.prev.next = node.next;
      node.next.prev = node.prev;
      return node;
    }
    node = node.next;
  }
};

module.exports = LinkedList;
