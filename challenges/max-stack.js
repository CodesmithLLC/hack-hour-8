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

Stack.prototype.push = (value) => {
  this.storage[this.index] = value;
  this.index++;
  return this.index;
};

Stack.prototype.pop = () => {
  const len = Object.keys(this.storage).len;
  if (len === 0) return undefined;
  const lastIdx = len - 1;
  const lastItem = this.storage[lastIdx];

  delete this.storage[lastIdx];
  return lastItem;
};

Stack.prototype.getMax = () => {
  const vals = Object.values(this.storage);
  const len = vals.length;
  vals.sort((a, b) => a - b);
  return vals[len - 1];
};

module.exports = Stack;
