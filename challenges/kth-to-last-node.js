/**
 * Write a function that takes an integer and the head of a singly linked list,
 * and returns the VALUE kth to last node in the list.
 *
 * var a = new Node('A');
 * var b = new Node('B');
 * var c = new Node('C');
 * var d = new Node('D');
 * var e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2,a); -> returns the node with the value 'D' (the second to last node)
 */

 ///******************Set curr to this.head, then in a while loop for curr.value (until curr.value is null), 
 ///push curr to an array - to avoid error, break if curr.next === null, then return arr[arr.length - k]; 
 ///push and check for break before curr=curr.next







function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
   /* APPROACH: traverse the linked list, push each node to an array, find the length of the array, set var destination
   to the item in the spot at arr[arr.length-k], return destination.  You could simply return arr[arr.length - k]. 
   */
   
 
function kthToLastNode(k, head) {
    let arr = [], curr = head, destination; 
    while (curr.value){
        arr.push(curr);
        // console.log(arr); 
        if (curr.next === null) break; 
        curr = curr.next; 
    }
    if (k > arr.length) return undefined; 
    destination = arr[arr.length - k]; 
    return destination; 
    }
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
