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

  var num = 1;
  var zip = new Node(l1.value);
  var zipHead = zip;
  var l1Next = l1.next;
  var l2Next = l2;

  while (true) {
    if (num === 1) {
      l2 = l2Next;
      l2Next = l2.next;
      zip.next = l2;
      zip = zip.next;
      if (l1Next === null) break;
      num = 2;
    } else {
      l1 = l1Next;
      l1Next = l1.next;
      zip.next = l1;
      zip = zip.next;
      if (l2Next === null) break;
      num = 1;
    }
  }
  return zipHead;
}
//
// var list1 = new Node('a' + 0);
// var list1Original = list1;
// var list2 = new Node('b' + 0);
// var list2Original = list2;
// for (var i = 1; i < 5; i++) {
//   list1.next = new Node('a' + i);
//   list1 = list1.next;
//   list2.next = new Node('b' + i);
//   list2 = list2.next;
// }
// console.log(list1Original);
// console.log(list2Original);
// console.log(list2);
// console.log(zip(list1Original, list2Original));
module.exports = {Node: Node, zip: zip};
