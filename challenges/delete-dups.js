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



function deleteDups(value) {
	let current = this.head,
			nextNode = current.next,
			hash = {};

	while(nextNode != null) {
    if(!hash[nextNode.value]) {
      hash[nextNode.value] = true;
    } else {
      current.next = nextNode.next;
      this._size--;
    }
    
    current = nextNode;
    nextNode = nextNode.next;
  }
}

module.exports = deleteDups;
