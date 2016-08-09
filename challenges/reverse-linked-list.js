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
  let ll = head;
  const vals = [];

  while (ll) {
    vals.push(ll.value);
    ll = ll.next;
  }

  const res = new Node(vals.pop());
  let temp = res;

  while (vals.length) {
    temp.next = new Node(vals.pop());
    temp = temp.next;
  }

  return res;
}

function reverseLinkedListInplace(head) {
  let res = null;

  while (head) {
    let temp = head.next;
    head.next = res;
    res = head;
    head = temp;
  }

  return res;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};

