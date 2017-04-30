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
	this.index ++;
	return this.index;
};

Stack.prototype.pop = function() {
	var popped = this.storage[this.index - 1];
	delete this.storage[this.index];
	this.index --;
	return popped;
};

Stack.prototype.getMax = function() {
	var maxVal = 0;
	for (var i = 0; i < this.index; i++){
		if (this.storage[i] > maxVal){
			maxVal = this.storage[i];
		}
	}return maxVal;
};

module.exports = Stack;