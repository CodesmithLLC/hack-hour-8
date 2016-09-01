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
  this.val = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
	// traverse linked lists, adding val at each step and pushing to a storage array
	function addition(l1, l2){
		var addArr = [];
		var l1Node = l1;
		var l1Next = l1.next;
		var l2Node = l2;
		var l2Next = l2.next;
		while(l1Node || l2Node){
			if(l1Node.val){
				addArr.push(l1Node.val);
				addArr[addArr.length-1] += l2Node.val;
			}
			else addArr.push(l2Node.val);
			if(tempAdd) addArr[addArr.length-1] += 1;
			if(addArr[addArr.length - 1] >= 10){
				addArr[addArr.length-1] -= 10;
				var tempAdd = true;
			}
			else tempAdd = false;
			if(!l1Node.next) break;
			var l1Temp = l1Next.next;
			l1Node = l1Next;
			l1Next = l1Temp;
			var l2Temp = l2Next.next;
			l2Node = l2Next;
			l2Next = l2Temp;
		}
		return addArr;
	}
	// take storage array and form new linked list
	function formNew(arr){
		var l3 = new Node(arr[0]);
		arr.shift();
		var l3Node = l3;
		while(arr.length > 0){
			l3Node.next = new Node(arr[0]);
			arr.shift();
			l3Node = l3Node.next;
		}
		return l3;
	}
	var arr = addition(l1,l2);
	return formNew(arr);
}

var link1 = new Node(3);
var link11 = new Node(1);
var link111 = new Node(5);
link1.next = link11;
link11.next = link111;
var link2 = new Node(5);
var link22 = new Node(9);
var link222 = new Node(2);
link2.next = link22;
link22.next = link222;

addLinkedList(link1,link2);

module.exports = {Node: Node, addLinkedList: addLinkedList};
