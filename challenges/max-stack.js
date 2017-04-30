/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = {};
  this.index = 0;
}

Stack.prototype.push = function(value) {
  this.storage[this.index] = value;
  this.index++;
  return this.storage;
};

Stack.prototype.pop = function() {
  this.index--;
  var res = {};
  for (var indexes in this.storage) {
    if (indexes == this.index) {
      var popVal = this.storage[this.index];
      this.storage = res;
      return popVal;
    }
    res[indexes] = this.storage[indexes];
  }
};

Stack.prototype.getMax = function() {
  let max = 0;
  for (var items in this.storage) {
    if (this.storage[items] > max) {
      max = this.storage[items];
    }
  }
  return max;
};

module.exports = Stack;
