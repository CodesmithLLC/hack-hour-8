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



function deleteDups(head) {
let valueObj = {};
var currentNode = head
while(currentNode){
  if(valueObj[currentNode.next.value]){
    console.log('already here');
  }
  valueObj[currentNode.value] = 1;
  currentNode = currentNode.next;
}
console.log(valueObj);
}

module.exports = deleteDups;


function Node(element) {
  this.value = element;
  this.next = null;
}

function LList() {
  this.head = null;
  this.insert = insert;
  this.tail = null
}


function insert(newElement) {
  var newNode = new Node(newElement);
  if(this.head === null){
    this.tail = this.head = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
}



var cities = new LList();
cities.insert("Seattle");
cities.insert("Portland");
cities.insert("Boulder");
cities.insert("Anaheim");
cities.insert("losangeles");
cities.insert("Boulder");

deleteDups(cities.head);
