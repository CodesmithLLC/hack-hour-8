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

function addLinkedList(l1, l2, carryover) {
  var current1  = l1.next
  var current2  = l2.next
  var temp;
  var res;

  res = new Node((l1.value + l2.value)%10);
  carryover = (l1.value + l2.value)/10 < 1 ? 0 : 1;

  while(current1 || current2 || carryover === 1){
    var currentRes = res
    while(currentRes.next) {
      currentRes = currentRes.next
    }
    if (!current1 && !current2) {
      currentRes.next = new Node(carryover);
      carryover = 0;
    }
    else if (!current2) {
      temp = current1.value + carryover;
      currentRes.next = new Node(temp%10);
      carryover = temp/10<1 ? 0 : 1;
      current1 = current1.next;
    }
    else if (!current1) {
      temp = current2.value + carryover;
      currentRes.next = new Node(temp%10);
      carryover = temp/10<1 ? 0 : 1;
      current2 = current2.next;
    }
    else {
      temp = current1.value + current2.value + carryover;
      currentRes.next = new Node(temp%10);
      carryover = temp/10 < 1 ? 0 : 1;
      current1 = current1.next;
      current2 = current2.next;
    }
  }
  return res;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
