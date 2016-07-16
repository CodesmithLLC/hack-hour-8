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

//parameters are a little confusing, might be better to name them
//'list1' and 'list2'. I thought they were numbers for a bit.

function zip(l1, l2) {
  var argues = Array.prototype.slice.call(arguments);
  var list1 = argues[0];
  var list2 = argues[1];

  if(list1.next === null){
    return list1.next = list2;
  }

  var temp;
  var oneCurr = list1;
  var twoCurr = list2;
  var tempCurr = oneCurr;

  while(tempCurr != null){
     
  }
};

console.log(zip(56, 34));
// module.exports = {Node: Node, zip: zip};
