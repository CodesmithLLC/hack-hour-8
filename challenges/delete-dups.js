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

//1-2-1-3-2-1-3-3-4
	//1-2-3-4

function deleteDups(head) {
	var obj = {}
	var previous = this.head;
	var current = this.head.next

	while(current != null) {
		if(!obj[current.value]) {
			obj[current.value] = true;
		} else {
			previous.next = current.next
		}
		previous = current
		current = current.next
	}

}

module.exports = deleteDups;
