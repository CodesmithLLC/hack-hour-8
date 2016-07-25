/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

Stack.prototype.pop = function() {
  var item = this.storage[this.index-1];
  delete this.storage[this.index-1];
  this.index--;
  return item;
};


/**
* Queue Class
*/


function Queue() {
  this.storage = {};
  this.index = 0;
}


Queue.prototype.enqueue = function(value) {
  this.storage[this.index] = value;
  this.index++;
};

Queue.prototype.dequeue = function() {
  var store = this.storage[0];
  var tempIndex = 0;
  delete this.storage[0];
  for (var key in this.storage) {
  	this.storage[tempIndex] = this.storage[key];
  	delete this.storage[key];
  	tempIndex++;
	}
  this.index--;

  return store;
};

// function Queue2() {
//   Stack.call(this);
// }


// Queue2.prototype.enqueue = function(value) {
  
// };

// Queue2.prototype.dequeue = function() {

// };


module.exports = {Stack: Stack, Queue: Queue};
