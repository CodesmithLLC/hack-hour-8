/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.length = 0;
  this.collection = {};

  this.push = function(value) {
    this.collection[this.length++] = value;
    // return this.length;
  };

  this.pop = function() {
    if (this.length <= 0) {
      this.length = 0;
      return undefined;
    }
    let temp = this.collection[--this.length];
    delete this.collection[this.length];

    return temp;
  };
}


/**
 * Queue Class
 */


function Queue() {
  this.stack1 = new Stack();
  this.stack2 = new Stack();

  this.enqueue = function(value) {
    this.stack1.push(value);
  };

  // to return the first-most element added
  this.dequeue = function() {
    Object.keys(this.stack1.collection).forEach(() => {
      this.stack2.push(this.stack1.pop());
    });

    return this.stack2.pop();
  };
}

module.exports = {
  Stack: Stack,
  Queue: Queue
};
