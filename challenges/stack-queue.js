/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  this.storage = [];
  this.index = 0;
}

Stack.prototype.push = function (value) {
  this.storage[this.index] = value;
  this.index++;
  return this.index;
};

Stack.prototype.pop = function () {
  const popped = this.storage[this.index - 1];
  delete this.storage[this.index--];
  return popped;
};

/**
* Queue Class
*/
function Queue() {
  this.q = new Stack();
}

Queue.prototype.enqueue = function(value) {
  this.q.push(value);
  this.q.index++
  return this.q.index;
};

Queue.prototype.dequeue = function() {

};

module.exports = { Stack: Stack, Queue: Queue };
