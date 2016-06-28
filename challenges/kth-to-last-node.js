/**
 * Write a function that takes an integer and the head of a singly linked list,
 * and returns the VALUE kth to last node in the list.
 *
 * var a = new Node('A');
 * var b = new Node('B');
 * var c = new Node('C');
 * var d = new Node('D');
 * var e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2,a); -> returns the node with the value 'D' (the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
//find the length of the linked list, possibly using a counter
  let nodeLength = 0;
  let currentNode = head;
  while (currentNode.next !== null) {
    nodeLength++;
    currentNode = currentNode.next
  }
//using that length, substract k from the last number, aka kthNode
  const kthNode = nodeLength - k;
  let kthNodeValue;
//iterate through the linked list again but only kthNode times
  let currentNodeKth = head;
  for (let i = 0; i < kthNode; i++) {
    kthNodeValue = currentNodeKth.value;
    currentNodeKth = currentNodeKth.next;
  }
//return the value of that node
  return kthNodeValue;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
