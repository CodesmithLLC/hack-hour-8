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
  let hashTable = {};
	let current = head;
	let prev;

	while (current.next){

		if (hashTable[current.value] === undefined) {
			hashTable[current.value] = true;
		} else {
			current = prev.next
		}
		prev = current;
		current = current.next;
	}

	return current
}

module.exports = deleteDups;
