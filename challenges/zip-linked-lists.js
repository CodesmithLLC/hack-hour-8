/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

/*
Solution approach
Build a function (likely with a while loop) that traverses both linked lists and interchangeably reconnecting next.
Return the first list



var a = new Node(5);
var b = new Node(7);
var c = new Node(6);
var d = new Node(8);

a.next = b;
c.next = d;
*/

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  var nodeContainer1 = [];
  var nodeContainer2 = [];
  var zipContainer = [];
  var obj1 = l1;
  var obj2 = l2;
  var zipObj;
  
  while (obj1) {
  	nodeContainer1.push(obj1);
  	obj1 = obj1.next;
  }

  while (obj2) {
  	nodeContainer2.push(obj2);
  	obj2 = obj2.next;
  }

  for(var i =0; i < Math.max(nodeContainer1.length, nodeContainer2.length); i++){
  	if(nodeContainer1 !== undefined) zipContainer.push(nodeContainer1[i]);
  	if(nodeContainer2 !== undefined) zipContainer.push(nodeContainer2[i]);
  }

  for(var k = 0; k < zipContainer.length-1; k++) {
  	zipContainer[k].next = zipContainer[k+1];
  }

  return l1;

}

module.exports = {Node: Node, zip: zip};
