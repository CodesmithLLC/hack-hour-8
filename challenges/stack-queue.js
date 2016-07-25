/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  this.storage = {};
  this.index = 0;

  this.push = function(val) {
    this.storage[this.index] = val;
    this.index++;
  };

  this.pop = function() {
    this.index--;
    const res = this.storage[this.index];
    delete this.storage[this.index];
    return res;
  };
}


/**
* Queue Class
*/


function Queue() {
  this.storage1 = new Stack();
  this.storage2 = new Stack();

  this.enqueue = function(val) {
    this.storage1.push(val);
  };

  this.dequeue = function() {
    let deleted;
    let index;
    if (this.storage2.index === 0) {
      for (let key in this.storage1.storage) {
        this.storage2.push(this.storage1.storage[key]);
      }
    }
    index = this.storage2.index - 1;
    deleted = this.storage2.storage[index];
    delete this.storage2.storage[index];
    return deleted;
  }
}

module.exports = {Stack: Stack, Queue: Queue};
