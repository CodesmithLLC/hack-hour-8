/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
	this.size = 0;
	this.storage = {};
}

Stack.prototype.push = function(data) {
	let size = this.size++;
	this.storage[size] = data;
}

Stack.prototype.pop = function() {
	let size = this.size,
			deletedData;

	if (size) {
		deletedData = this.storage[size];

		delete this.storage[size];
		this.size--;

		return deletedData
	}
}


/**
* Queue Class
*/


function Queue(stack) {
	this.storage ={},

	let stack1 = new Stack(),
			stack2 = new Stack();

	if (!stack) {
		stack1.push(stack);
	}
}

module.exports = {Stack: Stack, Queue: Queue};
