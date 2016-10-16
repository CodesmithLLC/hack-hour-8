/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 * potential answer: sort then delete duplicates
 * better answer: create search function for list, and run search on each node below particular node
 */


// var obj = {
// value: 3,
// next: {
// value: 4,
// next: {
// value: 5,
// next: {
// value: 3,
// next: {
// value: 4,
// next: null
// }
// }
// }
// }
// };


// non buffer version
function deleteDups(head) {
  if (head === null) return head;
  let curr = head;

  // search and delete function
  function searchAndDestroy(node, val) {
    if (!node.next) return;

    if (node.next.value === val) {
      node.next = node.next.next;
      searchAndDestroy(node, val);
    }
    searchAndDestroy(node.next, val);
  }

  searchAndDestroy(curr, curr.value);
  curr = curr.next;

  return deleteDups(curr);
}


// buffer version
// function deleteDups(head) {

// var cache ={},
// curr = head;

// while(curr.next){
// if(cache[curr.next.value]){
// deletion logic
// if(curr.next.next){
// curr = curr.next.next;
// }else{
// curr.next = null;
// }
// }else{
// cache[curr.value] = 1;
// curr = curr.next;
// }
// }

// return head;
// }

module.exports = deleteDups;
