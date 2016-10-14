// This definitely needs to be redone

/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 8 -> 0 -> 8
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  let firstCurr = l1,
    secondCurr = l2,
    nodeCurr,
    carryOver = 0,
    sum = null,
    node = null;

  while (firstCurr || secondCurr || carryOver) {
    if (!firstCurr && !secondCurr && carryOver) {
      sum = carryOver;
      carryOver = 0;
      nodeCurr.next = new Node(sum);
      return node;
    } else if (!firstCurr || !secondCurr) {
      sum = !firstCurr ? secondCurr.value + carryOver : firstCurr.value + carryOver;
      carryOver = 0;
    } else {
      sum = firstCurr.value + secondCurr.value + carryOver;
      sum > 9 ? (carryOver = +(sum / 10).toFixed(), sum %= 10) : carryOver = 0;
    }

    !node ? (node = new Node(sum), nodeCurr = node) : (nodeCurr.next = new Node(sum), nodeCurr = nodeCurr.next)

    firstCurr = !firstCurr ? null : firstCurr.next;
    secondCurr = !secondCurr ? null : secondCurr.next;
  }

  return node;
}

module.exports = {
  Node: Node,
  addLinkedList: addLinkedList
};
