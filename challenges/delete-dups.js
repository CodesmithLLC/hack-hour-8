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
  var dups = {};
  var temp = { value: null, next: null };
  while (current.next) {
  	if (!dups[current.value]) {
  		dups[current.value] = counter.value;
  	} else {
  		temp.value = current.next.next.value;
  		temp.next = current.next.next;
		current.value = temp.value;
  	  	current.next = temp.next;
  	}
	current = current.next;
  }
}

module.exports = deleteDups;
