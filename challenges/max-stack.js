/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  this.pancake = [];
  this.push = function(value) {
  	this.pancake.push(value);
  	return this.pancake.length;};
  this.pop = function() {
  	if(this.pancake.length === 0) {return 'Stack is empty';}
  	return this.pancake.pop();};
  this.getMax = function() {
  	if(this.pancake.length === 0) {return 'No max. Stack is empty';}
  	return Math.max.apply(null, this.pancake);};
}


module.exports = Stack;