/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.storage = {};
  this.length = 0;
  this.max = Number.NEGATIVE_INFINITY;
}

Stack.prototype.push(val) {
  // code
  this.storage[this.length] = val;
  if (val > this.max) this.max = val;
  // if (this.length) {
  //   if (this.max[this.length - 1] < val) this.max[this.length] = val;
  //   for (let i = this.length - 2; i >= 0; i--) {
  //     if (this.max[i] < val) {
  //       let bott = this.max[i + 1];
  //       this.max[i + 1] = val;
  //       for (let j = i + 2; j < this.length; j++) {
  //         let temp = this.max[j];
  //         this.max[j] = bott;
  //
  //       }
  //     }
  //   }
  // } else this.max[this.length] = val;
  //
  // this.length++;
  return ++this.length;
}

Stack.prototype.pop() {
  // code
  const value = this.storage[--this.length];
  
  if (this.storage[this.length - 1] === this.max) {
    this.max = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < this.length; i++) {
      if (this.storage[i] > this.max) this.max = this.storage[i];
    }
  }
  return value;
}

Stack.prototype.getMax() {
  // code
  return this.max[this.length - 1];
}

module.exports = Stack;
