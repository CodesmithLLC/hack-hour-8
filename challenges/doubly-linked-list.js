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
  this.tail.next = new Node(val);
  this.tail.next.prev = this.tail;
  this.tail = this.tail.next;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  var current = this.head;
  while (current) {
    if (current.val === val) {
      if (current === this.head) {
        this.head = current.next;
        this.head.prev = null;
      } else if (current === this.tail) {
        this.tail = current.prev;
        this.tail.next = null;
      } else {
        current.prev.next = current.next;
        current.next.prev = current.prev;
      }
      return this;
    }
    current = current.next;
  }
  return this;
};

module.exports = LinkedList;
