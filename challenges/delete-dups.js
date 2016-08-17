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
	var cache = [];
	for(var current=head;current;current = current.next){
		if(cache.indexOf(current.value) === -1) {
			cache.push(current.value);
		}
		if(current.next){
			if(cache.indexOf(current.next.value) !== -1) current.next = current.next.next;
		}
		// else {
		// 	//if next is part of cache, then make current.next = current.next.next 
		// }
	}
}

module.exports = deleteDups;
