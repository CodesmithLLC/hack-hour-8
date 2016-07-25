/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
	this.storage = {};
	this.index = 0;
}

Stack.prototype.push = function(val){
  	this.storage[this.index] = val;
  	this.index++;
  	return this.index;
  };

Stack.prototype.pop = function(){
	this.index--;
	var temp = this.storage[this.index];
	delete this.storage[this.index];
	return temp;
};

/**
* Queue Class
*/

function Queue() {
	this.stack1 = new Stack();
	this.stack2 = new Stack();
	this.deindex = 0;
}

Queue.prototype.enqueue = function(value){
	this.stack1.push(value);
	if (this.stack2.index === 0) this.stack2.push(value);
	else{
		while (this.stack2.index > 0) { 
			this.stack2.pop();
		}
		for (var i = this.stack1.index-1; i >= this.deindex; i--) {
			this.stack2.push(this.stack1.storage[i]);
		}
	}
	return this.stack2;
}

Queue.prototype.dequeue = function(value){
	if (this.stack2.index === 0) return this.stack2;
	this.stack2.pop();
	this.deindex++;
	return this.stack2;
}

var queue = new Queue();

module.exports = {Stack: Stack, Queue: Queue};
