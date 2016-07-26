/**
 * Create a stack.Then create a queue using two stacks.
 */


 function Stack() {
   this.storage = {};
   this.index = 0;
   this.push = function(value) {
   	this.storage[this.index]=value;
   	this.index++;
   	return this.index;
   };
   this.pop = function() {
   	let popped = this.storage[this.index -1];
   	delete this.storage[this.index -1];
   	this.index--;
   	return popped;
   }
 }



 /**
 * Queue Class
 */


 function Queue() {
 	this.inbox = new Stack();
 	this.outbox = new Stack();
 	this.push = function(value) {
 		 return this.inbox.push(value);
 	};

 	this.pop = function() {
 		if (!this.outbox.index && !this.inbox.index) {return 'empty queue'};
 		while (this.inbox.index){
 			this.outbox.push(this.inbox.pop());
 		}
 		return this.outbox.pop();
 	}

 }


module.exports = {Stack: Stack, Queue: Queue};
