/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
<<<<<<< HEAD
  this.storage = {};
  this.index = 0;
  this.max;
  
  Stack.prototype.push = function(val){
  	if (this.index === 0) this.max = val;
  	else if (val > this.max) this.max = val;
  	this.storage[this.index] = val;
  	this.index++;
  	return this.index;
  };

  Stack.prototype.pop = function(){
	this.index--;
  	var temp = this.storage[this.index];
  	delete this.storage[this.index];
  	if (temp === this.max){
  		this.max = this.storage['0'];
  		for (let key in this.storage){
  			if (this.storage[key] > this.max) this.max = this.storage[key];
  		}
  	}
  	return temp;
  };

  Stack.prototype.getMax = function(){
  	return this.max;
  };
=======
>>>>>>> c410402e0ec31ee6effc4972ecb7ba17deff095f
}

module.exports = Stack;