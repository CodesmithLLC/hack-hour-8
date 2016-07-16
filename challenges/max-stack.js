/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.content = [];
  this.max = [];

  this.push = function(element) {
    this.max.push(element);
    this.max.sort(function(a, b) {
      return b > a ? -1 : 1;
    });
    // console.log('max array ' + this.max);
    this.content.unshift(element);
    return this.content.length;
  };

  this.pop = function() {
    var removed = this.content.pop();
    var indexMax = this.max.indexOf(removed);
    this.max.splice(indexMax, 1);
    // console.log('max array pop ' + this.max);
    return removed;
  };

  this.getMax = function() {
    return this.max.pop();
  };
}

var stack = new Stack();

// stack.push(1);
// stack.push(2);
// console.log('lenght ' + stack.push(100));
// stack.push(6);
// stack.push(3);
// stack.push(7);
// stack.push(4);
// console.log('max ' + stack.getMax());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
//
// console.log(stack.pop());
// console.log('max ' + stack.getMax());
// module.exports = Stack;
