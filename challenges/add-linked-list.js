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

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
//Approach: grab each value in each linked list, store them in arrays, loop through arrays, sum
//values, accounting for sums that add to greater than 9 (increment number in next node in l1 by
//amount over 10 of sum of current nodes), place in new Linked List. Account for 
//different lengths of linked lists by concating both arrays into resArr once either array has a length of zero. .  
    curr1 = l1.head, curr2 = l2.head, l1Arr = [], l2Arr = [], resArr = [], aboveTen = 1, resLinkedList, head; 
    while (curr1){
        l1Arr.push(curr1.value); 
        curr1 = curr1.next; 
    }
    while (curr2){
        l2Arr.push(curr2.value); 
        curr2 = curr2.next; 
    }
    while(l1Arr.length > 0 && l2Arr.length > 0){
        if (l1Arr[0] + l2Arr[0] > 9){
            if (l1Arr[1] === undefined) l1Arr[1] = 1; 
            l1Arr[1] += aboveTen; 
            resArr.push((l1Arr.shift() + l2Arr.shift()) - 10); 
            }
        resArr.push(l1Arr.shift() + l2Arr.shift());     
        }
    resArr.concat(l1Arr).concat(l2Arr); 
    resLinkedList = new Node(0); 
    head = resLinkedList; 
    for (var i = 0; i < resArr.length-1; i++){
        head.value = resArr[i]; 
        head.next = new Node(resArr[i + 1]); 
        head = head.next; 
    }
    return resLinkedList; 
    

}

module.exports = {Node: Node, addLinkedList: addLinkedList};
