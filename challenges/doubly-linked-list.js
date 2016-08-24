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
  if (!this.tail) {
    this.tail = new Node(val);
    this.tail.prev = this.head;
  }

  let temp = this.tail;
  this.tail = new Node(val);
  this.tail.prev = temp;
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let curr = this.head,
    temp;

  while (curr.next) {
    if (curr.val === val && curr === this.head) {
      this.head = curr.next;
      curr = this.head;
      curr.prev = null;
    }

    if (curr.val === val) {
      temp = curr.next;
      curr.next.prev = curr.prev;
      curr.prev.next = temp;
    }

    if (curr.next === this.tail && curr.next.val === val) {
      this.tail = curr;
      curr.next = null;
    }
    curr = curr.next;
  }
};

module.exports = LinkedList;
