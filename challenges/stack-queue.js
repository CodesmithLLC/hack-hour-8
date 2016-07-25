/**
 * Create a stack.Then create a queue using two stacks.
 */

function Stack() {
  this.storage = {};
  this.index = 0;
}

/**
* Queue Class
*/
function Queue() {
  this.storage = {};
  this.index = 0;
  const stack = new Stack();
  let i = 0;

  while (i < 2) {
    this.storage[this.index] = stack;
    this.index++;
    i++;
  }
}

// function enqueue(value) {
//   this.storage[this.index] = value;
//   this.index++;
//   return this.index;
// }
//
// function twoStackQueue() {
//   const q = new Queue();
//   q.enqueue(stack);
//   q.enqueue(stack);
//
//   return q;
// }

module.exports = { Stack: Stack, Queue: Queue };
