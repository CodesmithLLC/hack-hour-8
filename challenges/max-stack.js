/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = [];
  this.length = 0;
  this.max = [];

  this.push = function(item) {
    this.storage[this.length] = item;
    this.length++;

    if(this.max[0] === undefined || (this.max[0] < item)) {
      this.max.unshift(item);
    }

  };

  this.pop = function() {
    var item = this.storage[this.length - 1];
    var itemIndex = this.max.indexOf(item);

    if (itemIndex > -1) {
      this.max.splice(itemIndex, 1);
    }
    
    this.storage = this.storage.slice(0, this.length - 1);
    this.length--;
    return item;
  };

  this.getMax = function() {
    return this.max[0];
  }

}

module.exports = Stack;