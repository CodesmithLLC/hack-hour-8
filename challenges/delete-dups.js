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
  const cache = {};
  let node = head;
  let prev = null;

  while (node) {
    if (cache[node.value]) {
      prev.next = node = node.next;
    } else {
      cache[node.value] = 1;
      prev = node;
      node = node.next;
    }
  }

  return head;
}

module.exports = deleteDups;
