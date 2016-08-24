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
LinkedList.prototype.add = function (val) {
  const newNode = new Node(val);
  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function (val) {
  let currentNode = this.head;
  if (this.tail.val === val){
    this.tail = this.tail.prev;
    this.tail.next = null;
  } else {
    while (currentNode.next){
      if (currentNode.next.val === val) {
        currentNode.next.next.prev = currentNode;
        currentNode.next = currentNode.next.next;
      }
      currentNode = currentNode.next
    }
  }
};

module.exports = LinkedList;
