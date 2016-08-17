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


//non buffer version
function deleteDups(head) {

  var curr = head;

  while(curr.next){
    if(searchList(curr, curr.value)){
     //delete logic 
      if(curr === head){
        head = head.next;
        curr = head;
      }else if(curr.next.next){
        curr.next = curr.next.next;
      }else{
        curr.next = null;
      }
    }else{
      curr = curr.next;
    }
  }
  
return head;
}

//search function
function searchList(node,val){

  var cur = node.next;

  while(cur){
    if(cur.value === val){
      return true;
    }else{
      cur = cur.next
    }
  }
  return false;
}


//buffer version
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
