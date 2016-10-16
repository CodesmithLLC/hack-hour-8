// Write a function that takes an integer and the head of a singly linked list,
// and returns the VALUE kth to last node in the list.

// var a = new Node('A');
// var b = new Node('B');
// var c = new Node('C');
// var d = new Node('D');
// var e = new Node('E');

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;


function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  if (!head) return undefined;
  const listExpansion = [];
  let current = head;

  while (current) {
    listExpansion.push(current);
    current = current.next;
  }
  if (k > listExpansion.length) return undefined;
  return listExpansion[listExpansion.length - k].value;
}

// console.log(kthToLastNode(2,a));
// -> returns the node with the value 'D' (the second to last node)

module.exports = {
  Node: Node,
  kthToLastNode: kthToLastNode
};
