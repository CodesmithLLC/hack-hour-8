/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
	this.storage = [];
	
	var index = 0;

}

Stack.prototype.push = function(item) {
		this.storage[index] = item
		index++
}

Stack.prototype.pop = function(item) {
	var deleted = remove this.storage[index - 1]
	return deleted
}

Stack.prototype.size = function() {
	return this.storage.length
}

/**
* Queue Class
*/


function Queue() {
	var inbox = new Stack();
	var outbox = new Stack();
}

Queue.prototype.enque = function(item) {
	inbox.push(item)
}

Queue.prototype.dequeue = function(item) {
	if(outbox.size() === 0) {
		while(inbox.size()) {
			outbox.push(inbox.pop());
		}
		return outbox.pop();
	}
}

module.exports = {Stack: Stack, Queue: Queue};
