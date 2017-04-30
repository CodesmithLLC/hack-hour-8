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
    let curr;  
    if (!l1){
        return l2; 
    }
    if (!l2){
        return l1;
    }
        curr = l1; 
        let head = curr; 
        curr.next = l2; 
        curr = curr.next; 
    while(curr){
        if (l1.next === null){
                return head;
        }
        curr.next = l1.next; 
        curr = curr.next; 
        if (l2.next === null){
            return head; 
        }
        curr.next = l2.next; 
        curr = curr.next; 
    }   
}


module.exports = {Node: Node, zip: zip};
