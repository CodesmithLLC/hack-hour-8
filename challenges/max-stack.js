/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */
var somestack = [];
function Stack() {
  // body...
  
  var index = 0;
  Stack.push = function(value) {
  	somestack[somestack.length] = value;
  	index++;
  	return index;
  }
  Stack.pop = function(value) {
  	var removedItem = somestack[somestack.length-1]
  	somestack.splice(removedItem, 1);
  	index--;
  	return removedItem;
  }
  Stack.getMax = function() {
  	return Math.max(...somestack);
  }
}

module.exports = Stack;