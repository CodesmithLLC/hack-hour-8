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
  //Approach: create new node, if nothing in linked list, add new node as head, 
  //then set tail to head. If stuff in list, new node, set new node prev to tail, then set 
  //this.tail.next to new node, this.tail to this.tail.next. 
  let node = new Node(val); 
  if (this.head === null) {
    node = this.head; 
    this.tail = this.head; 
  } else {
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = this.tail.next; 
  }
};

/*
Removes the first node with the inputted value
 */
 /*
 Approach: set curr to head, prev to null, traverse dbly linked list, while curr.val does not 
 equal val, prev = curr and curr = curr.next, if all the way through the list and no val, return? 
  Otherwise, when curr.val === val, prev.next = curr.next and curr.next.prev(cause it's a dbly 
  linked list) = prev - this effectively removes curr from the dbly linked list. 
 */
LinkedList.prototype.remove = function(val) {
  let curr = this.head, prev = null;
  while (curr.val !== val){
    prev = curr; 
    curr = curr.next; 
    if (curr.val === null) return; 
  }
  prev.next = curr.next; 
  curr.next.prev = prev; 
  return curr.val; 
};

module.exports = LinkedList;
