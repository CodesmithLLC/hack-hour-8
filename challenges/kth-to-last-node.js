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

 /*
Have to get to the last node (this.next == null) and move backwarsds
Have a counter variable, starting at one (representing the last node)
for each step up in the linked list, increment the counter by one until it reaches k
return that node
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  let len = 0;
  let i = 1;

// edge case: k is < 1 and unusable
  if (k < 1) {
    return undefined;
  }
// edge case: list undefined
  if (this.value == null) {
    return undefined;
  }
// check for list length of one
  if (this.value === head && this.next == null) {
    return this.value;
  }

// get length
  while (!this.next == null) {
    for (i in list) {
      if (!this.value == null) {
        len++;
      }
    }
  }

  const kthFromEnd = len - k;

  if (k > len) {
    return undefined;
  }
//loop through list to get to the last item
//
}

module.exports = { Node: Node, kthToLastNode: kthToLastNode };
