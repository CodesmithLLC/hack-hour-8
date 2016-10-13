//This definitely needs to be redone

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

function flattenlist(list){
  var current = list;
  var numstr = '';
  while(typeof current.value === 'number'){
    numstr = current.value + numstr;
    current = current.next;
  }
  return +numstr;
}

function singlist() {
    this._length = 0;
    this.head = null;
}

singlist.prototype.add = function(value) {
    var node = new node(value),
        currentnode = this.head;
 
    // 1st use-case: an empty list 
    if (!currentnode) {
        this.head = node;
        this._length++;
         
        return node;
    }
 
    // 2nd use-case: a non-empty list
    while (currentnode.next) {
        currentnode = currentnode.next;
    }
 
    currentnode.next = node;
 
    this._length++;
     
    return node;
};

function addlinkedlist(l1, l2) {

  var sum = flattenlist(l1) + flattenlist(l2);
  var revarr = sum.tostring.split('').reverse();
  var list = new singlist();
  for(var i = 0; i < revarr; i++){
    list.add(+revarr[i]);
  }

  return list;
}

module.exports = {Node: Node, addLinkedList: addLinkedList};
