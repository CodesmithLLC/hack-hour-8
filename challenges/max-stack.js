/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.length = -1
  this.store = {}
}

Stack.prototype.push = function (v) {
  this.length += 1;
  this.store[this.length] = v
  return this.length
}

Stack.prototype.pop = function () {
  var popped = this.store[this.length]
  if (this.length < 0) return undefined;
  else {
    delete this.store[this.length]
  }
  this.length -= 1
  return popped
}



module.exports = Stack;
