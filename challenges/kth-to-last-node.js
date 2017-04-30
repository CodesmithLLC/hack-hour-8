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
  let c = k;
  let res;
  let cur = head;

  c--;
  while (c && cur) {
    cur = cur.next;
    c--;
  }

  if (c) return undefined;

  res = head;
  while (cur.next) {
    res = res.next;
    cur = cur.next;
  }

  return res.value;
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
