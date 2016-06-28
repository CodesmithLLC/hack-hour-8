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
 *kthToLastNode(2,a); -> returns the node with the value 'D' (the second to last node)
 */


/*
Solution approach:
I'm going to try and build a function that 
1. traverses a linked list (probably use a while loop)
2. pushes the value of each node into an array as it traverses
3. returns the value of at k
4. If there is time, set up the function to account for edge cases (i.e. k is > number of values)
*/


function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  var valueContainer = [];
  var obj = head;
  while (obj) {
  	valueContainer.push(obj.value);
  	obj = obj.next
  }

  if (k > valueContainer.length) {
  	console.log('Not enough values to get the '+k+' to the last node value!')
  	console.log('There are '+valueContainer.length+' values in this linked list and '+valueContainer[0]+' is the first value.')
  }
  
  return valueContainer[valueContainer.length - k];

}


module.exports = {Node: Node, kthToLastNode: kthToLastNode};
