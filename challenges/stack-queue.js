function Stack() {
  this.contents = {};
  this.length = 0;
}

Stack.prototype.push = function(value) {
	this.contents[this.length] = value;
	this.length++;
};

Stack.prototype.pop = function() {
	this.length--;
	var temp = this.contents[this.length];
	delete this.contents[this.length];
	return temp;
};

Stack.prototype.forEach = function(callback) {
	while(this.length >= 0){
		var temp = this.contents[this.length];
		delete this.contents[this.length];
		callback(temp);
		this.length--;
	}
};

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack);
console.log(stack.pop());
console.log(stack);


function Queue() {
  this.stack1 = new Stack();
  this.stack2 = new Stack();
}

Queue.prototype.enqueue = function(value) {
	this.stack1.push(value);
	return this.stack1;
};

Queue.prototype.dequeue = function() {
	while(this.stack1.length>1){
		var pop = this.stack1.pop();
		this.stack2.push(pop);
	}
	var temp = this.stack1.pop();
	while(this.stack2.length>0){
		var popBack = this.stack2.pop();
		this.stack1.push(popBack);
	}
	return temp;
};