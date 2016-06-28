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

  if (k <= 0) return "Please enter an integer greater than 0";
  if (head.next === null && k >= 1) return head.value;
    var listExpansion = [];
    var current = head;

    while (current.next !== null) {
        listExpansion.push(current);
        current = current.next
    }
    return listExpansion[listExpansion.length - (k - 1)].value;
}

module.exports = {
    Node: Node,
    kthToLastNode: kthToLastNode
};
