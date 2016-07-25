/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value, next) {
    this.value = value;
    this.next = next;
}

function reverseLinkedList(head) {
/*
Step through linked list, all the way to the end (until this.next
 === null).   
through that array from front to back, assigning each element to a new 
node in a new linked list.
*/
    let temp = head, arr = [], arr2 = []; 
    while(temp){
        arr.push(temp); 
        temp = temp.next; 
    }
    arr = arr.reverse(); 
//  console.log(arr);
    for (var i =arr.length-1; i >= 0; i--){
        arr2.push(new Node (arr[i].value)); 
    }
    arr2 = arr2.reverse(); 
//console.log('reed', arr2); 
    for (var j = 0; j < arr2.length-1; j++){
        arr2[j].next = arr2[j+1]; 
    }

    res = arr2[0]; 
    console.log('res', res); 
    return res; 
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
