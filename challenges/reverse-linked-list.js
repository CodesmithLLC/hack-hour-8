/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
// traverse from head to tail
// store nodes in an array? then reverse through array once head is reassigned?
// when at tail, set tail to head
var nodeArr =[];
var headNode = head;
var currentNode = head;
while(currentNode.next){
  nodeArr.push(currentNode);
  currentNode = this.next;
}
headNode = currentNode;



// ultimately return headNode;
return headNode;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
