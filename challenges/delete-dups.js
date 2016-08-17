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

/*
Approach: Traverse linked list and track values. If there's a duplicate, unlink the obect and link next to the following object.

*/

function deleteDups(head) {
  var values = [];
  var obj = head;
  var prevObj;

  while (obj) {
  	if(values.indexOf(obj.value) < 0) {
  		values.push(obj.value);
  		prevObj = obj;
  		obj = obj.next;
  	} else {
  		prevObj.next = obj.next;
  		obj = obj.next;
  	}
  }
  
  return head;
}

module.exports = deleteDups;
