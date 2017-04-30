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
 */


function deleteDups(){
    let obj = {}; 
    obj[head.value] = true; 
    for (var curr = head; curr.next; ){
        if (obj[curr.next.value]){
            curr.next = curr.next.next; 
        }
        else {
            obj[curr.next.value] = true; 
            curr = curr.next; 
        }
    }
    return head; 
}


module.exports = deleteDups;
