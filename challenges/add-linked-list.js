/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (3 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 8 -> 0 -> 8
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  var head1 = l1;
  var head1Arr = [];
  var head2 = l2;
  var head2Arr = [];
  var head3Arr = [];
  while(head1 || head2) {
  	head1Arr.unshift(head1.value);
  	head2Arr.unshift(head2.value);
  	head1 = head1.next;
  	head2 = head2.next;
  }

  var sumStr = (parseInt(head1Arr.join(''))+parseInt(head2Arr.join(''))).toString().split('');
  
  for(var i = sumStr.length-1; i >= 0; i--){
  	head3Arr.push(new Node(parseInt(sumStr[i])));
  }

  for(var j = 1; j < head3Arr.length; i++){
  	  	head3Arr[i-1].next = head3Arr[i];
  	}

  return head3Arr[0];

}


module.exports = {Node: Node, addLinkedList: addLinkedList};
