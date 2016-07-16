/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

 function Stack() {
   // body...
   this.stack = [];
   this.getMax = 0;

   this.push = function(x) {
     if (this.getMax === 0) this.getMax = x;
     if (x > this.getMax) this.getMax = x;
     this.stack.length = this.stack.length + 1;
     this.stack[this.stack.length - 1] = x;
     return this.stack.length;
   };

   this.pop = function() {
     const res = this.stack[this.stack.length - 1];
     this.stack.length = this.stack.length - 1;
     if (this.stack.length === 0) this.getMax = 0;
     else if (this.stack.length === 1) this.getMax = this.stack[0];
     else this.getMax = Math.max.apply(this, this.stack)
     return res;
   };
 }

module.exports = Stack;
