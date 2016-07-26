/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
var arr = [];

this.push = function(val) {
	arr[arr.length] = val;
	return arr.length;
};

this.pop = function() {
	var last = arr.length-1;
	var holder = arr[last];
	arr = arr.slice(0,last);
	return holder;
};

this.getMax = function() {
	return arr.reduce(function(prev, curr) {
		if (prev > curr) {
			return prev;
		} else {
			return curr;
		}
	});
};

}

module.exports = Stack;