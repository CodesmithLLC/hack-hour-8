/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
	this.value = [];
	this.length = 0;

	this.push = function(val){
		this.length++;
		this.value.length++;
		this.value[this.value.length-1] = val;
		return this.value;
	};

	this.pop = function(){
		var popped = this.value[this.value.length-1];
		this.value.length--;
		this.length--;
		return popped;
	};
}


/**
* Queue Class
*/


function Queue() {
	this.size = 0;
	this.isEmpty = true;
	this.inbox = new Stack();
	this.outbox = new Stack();

	this.enqueue = function(val){
		this.inbox.push(val);
		this.size++;
		if(this.size !== 0)this.isEmpty = false;
	};

	this.dequeue = function(){
		if(this.outbox.length === 0){
			while(this.inbox.length !== 0){
				this.outbox.push(this.inbox.pop());
			}
			return this.outbox.pop();
		}
		this.size--;
		if(this.size === 0)this.isEmpty = true;
	};
		
}

module.exports = {Stack: Stack, Queue: Queue};
