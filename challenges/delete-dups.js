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
  const unique = {};
  while (head.next !=== null) {
    unique[head.value] = null;
    if (unique.hasOwnProperty(head.next.value)) {
      head.next = head.next.next;
    }
    head = head.next;
  }
}

module.exports = deleteDups;
