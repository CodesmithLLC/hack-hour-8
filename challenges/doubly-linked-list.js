/* Create a doubly linked list with an add and remove method */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/* Adds a node to the end of the list */

LinkedList.prototype.add = (val) => {
  if (typeof val === 'undefined') return false;

  const node = new Node(val);

  if (!this.head) {
    this.head = this.tail = node;
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = this.tail.next;
  }

  this.tail.val = val;
};

/* Removes the first node with the inputted value */
LinkedList.prototype.remove = (val) => {
  let curr = this.head;

  while (curr) {
    if (curr.val === val) {
      curr.prev = curr.prev.prev;
      curr.next = curr.next.next;
    }

    curr = curr.next;
  }
};

module.exports = LinkedList;
