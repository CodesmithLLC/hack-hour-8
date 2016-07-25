/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
	this.storage = [];
}
Stack.prototype.push(value){
	this.storage.push(value);
};
Stack.prototype.pop(){
	return this.storage.pop();
};
/**
* Queue Class
*/
function Queue() {
	this.stack1 = [];
	this.stack2 = [];
}
Queue.prototype.enqueue = function(value) {
	this.stack1.push(value);
};
Queue.prototype.dequeue = function() {
	if(!this.stack2.length){
		if(!this.stack1.length){
			return undefined;
		}
		while(this.stack1.length){
			this.stack2.push(this.stack1.pop());
		}
	}
	return this.stack2.pop();
};

module.exports = {Stack: Stack, Queue: Queue};
