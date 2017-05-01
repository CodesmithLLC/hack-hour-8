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
	var vals = [];
	vals.push(head.value);
	for(var current = head; current.next;){
		if(vals.indexOf(current.next.value) > -1){
			current.next = current.next.next;
		}
		else{
			vals.push(current.next.value);
			current=current.next;
		}
	}
	return head;
}

module.exports = deleteDups;
