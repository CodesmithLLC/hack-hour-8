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
  var newStorage = {};
  this.index--;
  var poppedVal = this.storage[this.index];
  for (var i in this.storage) {
    if (i == this.index) {
      this.storage = newStorage;
      return poppedVal;
    }
    newStorage[i] = this.storage[i];
  }
};

function Queue() {
  this.inQueue = new Stack();
  this.outQueue = new Stack();
}

Queue.prototype.push = function(value) {
  this.inQueue.push(value);
};

Queue.prototype.pop = function() {
  for (var i in this.inQueue) {
    this.outQueue[i] = this.inQueue.pop();
  }
  return this.outQueue.pop();
};

module.exports = { Stack: Stack, Queue: Queue };
