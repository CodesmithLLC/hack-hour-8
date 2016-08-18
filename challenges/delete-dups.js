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
	var trail = head;
	var node = trail.next;
	while(node){
		if(vals.indexOf(node.value) === -1){
			vals.push(node.value);
			trail = node;
		} else {
			trail.next = node.next;
		}
		console.log(vals);
		node = node.next;
	}
	console.log("node ",trail);
}

module.exports = deleteDups;
