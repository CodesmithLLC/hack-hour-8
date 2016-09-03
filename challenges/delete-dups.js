/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */

function deleteDups(head) {
  var current = head;
  var previous;
  while (current && current.next) {
    previous = current;
    while (previous.next) {
      if (current.value === previous.next.value) {
        previous.next = previous.next.next;
      }
      else {
        previous = previous.next;
      }
    }
    current = current.next;
  }
}

module.exports = deleteDups;
