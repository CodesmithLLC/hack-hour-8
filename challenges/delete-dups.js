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
  if (!head) return null;
  let current = head;
  const store = {};
  let previous = head;

  while (current) {
    if (!store.current) {
      store.current = current.value;
    } else {
      previous.next = current.next.next;
    }

    previous = current;
    current = current.next;
  }

  return head;
}

module.exports = deleteDups;
