/**
 * Create a stack.Then create a queue using two stacks.
  Stack -> FILO
  Queue -> FIFO
 */
function Stack() {
  this.stack = [];
  this.pop = function pop() {
    return this.stack.pop();
  };
  this.push = function push(el) {
    this.stack.push(el);
  };
}
/**
* Queue Class  FIFO
*/
function Queue() {
  this.queue = [];
  this.shift = function shift() {
    return this.queue.shift();
  };
  this.push = function push(el) {
    this.queue.push(el);
  };
}

const stackOne = new Stack;
stackOne.push(3);
stackOne.push(8);
stackOne.push(9);

const stackTwo = new Stack;
stackTwo.push(90);
stackTwo.push(100);
stackTwo.push(101);

const queueOne = new Queue;
queueOne.push(stackOne);
queueOne.push(stackTwo);

module.exports = { Stack: Stack, Queue: Queue };
