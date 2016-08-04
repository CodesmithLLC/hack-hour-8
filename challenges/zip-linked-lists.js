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
  //  refactored solution
  let zipped, res;
  zipped = res = l1;
  l1 = l1.next;

  while (l1 && l2) {
    zipped.next = l2;
    zipped = zipped.next;
    l2 = l2.next;

    zipped.next = l1;
    zipped = zipped.next;
    l1 = l1.next;
  }

  zipped = l1 ? l1 : l2;

  return res;

  //  Own solution
//  const res = l1;
//  let main = l1;
//  let cp1 = l1.next;
//  let cp2 = l2;
//
//  while (cp1 && cp2) {
//    main.next = cp2;
//    main = main.next;
//    cp2 = cp2.next;
//
//    main = cp1;
//    main = main.next;
//    cp1 = cp1.next;
//  }
//
//  main = cp1 ? cp1 : cp2;
//
//  return res;

  //  iterative solution from lecture
//  const res = l1;
//  let temp = l1;
//  let l1 = l1.next;
//
//  while (l1 && l2) {
//    temp.next = l2;
//    l2 = l2.next;
//    temp = temp.next;
//
//    temp.next = l1;
//    l1 = l1.next;
//    temp = temp.next;
//  }
//
//  temp.next = l1 ? l1 : l2;
//
//  return res;

  //  recursive solution from lecture - so beautiful!!
//  if (!l1) return l2;
//  if (!l2) return l1;
//  l1.next = zip(l2, l1.next);
//  return l1;
}

function zipInplace(l1, l2) {
  let zipped = l1;
  l1 = l1.next;
  while (l1 && l2) {
    zipped.next = l2;
    l2 = l2.next;
    zipped = zipped.next;

    zipped.next = l1;
    zipped = zipped.next;
    l1 = l1.next;
  }
  zipped = l1 ? l1 : l2;
}

module.exports = { Node: Node, zip: zip };
