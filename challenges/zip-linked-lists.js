/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

// parameters are a little confusing, might be better to name them
// 'list1' and 'list2'. I thought they were numbers for a bit.

// function zip(l1, l2) {
// if ([...arguments].length < 2) return [...arguments][0];
// const head = l1;
// let temp = l1;
// l1 = l1.next;

// while (l1 && l2) {
// temp.next = l2;
// l2 = l2.next;
// temp = temp.next;
// temp.next = l1;
// l1 = l1.next;
// temp = temp.next;
// }

// temp.next = l2 ? l2 : l1;
// return head;
// }

function zip(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  let curr = new Node(l1.value);
  curr.next = zip(l2, l1.next);
  return curr;
}

module.exports = {
  Node: Node,
  zip: zip
};
