/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.container = [];

  this.push = function (element) {
    this.container.push(element);
  };

  this.pop = function (element) {
    return this.container.pop(element);
  };


}


/**
* Queue Class
*/


function Queue() {
  var input = new Stack();
  var output = new Stack();

  this.queue = function(element) {
    input.push(element);
  }

  this.dequeue = function() {
    if (output.length === 0) {
      while(input.length !== 0) {
        output.push(inbox.pop());
      }
    }
    return output.pop();
  }
}

module.exports = {Stack: Stack, Queue: Queue};
