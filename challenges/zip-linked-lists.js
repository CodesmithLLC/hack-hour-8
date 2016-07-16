/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {

l1.next = zip(l2, l1.next);
return l1;
  // if (l1.value === undefined) {
  //   return l2;
  // } else if (l2.value === undefined) {
  //   return l1;
  // }
  
  // var zipped
  // var tail;
  
  // var l1ContainsItems = true;
  // var l2ContainsItems = true;
  // var l1tail = l1.next;
  // var l2tail = l2.next
  
  // while (l1ContainsItems || l2ContainsItems) {
  //   if (zipped === undefined) {
  //     zipped = new Node(l1.value);
  //     zipped.next = new Node(l2.value)
  //     tail = zipped.next.next;
  //   } else {
      
  //     if(l1tail) {
  //       tail = new Node(l1.next.value);
  //       tail = tail.next;
  //       l1tail = l1tail.next;
  //     } else {
  //       l1ContainsItems = false;
  //     }
      
  //     if(l2tail) {
  //       tail = new Node(l2.next.value);
  //       tail = tail.next;
  //       l2tail = l2tail.next;
  //     } else {
  //       l2ContainsItems = false;
  //     }
      
  //   }
      
  // }

  // return zipped;
};

module.exports = {Node: Node, zip: zip};
