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
  let tail = head;
  let count = 0;
  while (tail.next) {
    tail = tail.next;
    count++;
  }
  let newTail = head;
  const newLL = new Node(tail.value);
  let newNode = newLL;
  while (count) {
    for (let i = 0; i < count; i++) {
      newTail = newTail.next;
    }
    newNode.next = new Node(newTail.value);
    newNode = newNode.next;
    count--;
  }
  return newLL;
}

function reverseLinkedListInplace(head) {
  if (!head.next) return head;
  const newHead = reverseLinkedList(head.next);
  newHead.next = head;
  return newHead;
}

function reverseLinkedListInplace2(head) {
  if (!head.next) return head;
  return reverseLinkedList2(head.next).next = head;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};

// function Node(value) {
//   this.value = value;
//   this.next = null;
// }
//
// function reverseLinkedList(head) {
//   let tail = head;
//   let count = 0;
//   while (tail.next) {
//     tail = tail.next;
//     count++;
//   }
//   let newTail = head;
//   const newLL = new Node(tail.value);
//   let newNode = newLL;
//   while (count) {
//     for (let i = 0; i < count; i++) {
//       newTail = newTail.next;
//     }
//     newNode.next = new Node(newTail.value);
//     newNode = newNode.next;
//     count--;
//   }
//   return newLL;
// }
//
// function reverseLinkedListInplace(head) {
//   if (!head.next) return head;
//   const newHead = reverseLinkedList(head.next);
//   newHead.next = head;
//   return newHead;
// }
//
// function reverseLinkedListInplace2(head) {
//   if (!head.next) return head;
//   return reverseLinkedList2(head.next).next = head;
// }
//
// let a = new Node('a');
// let b = new Node('b');
// let c = new Node('c');
// let d = new Node('d');
// let e = new Node('e');
// let f = new Node('f');
// let g = new Node('tail');
//
// let listy = new Node('head');
// listy.next = a;
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;
// f.next = g;
//
// listy;
//
// reverseLinkedListInplace(listy);
