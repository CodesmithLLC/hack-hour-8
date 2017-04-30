/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.container = {};
    this.length = 0;
}

Stack.prototype.push = function(val) {
    this.container[this.length++] = val;
}

Stack.prototype.pop = function() {
    this.container[--this.length];
}

/**
* Queue Class
*/


function Queue() {
    this.inbound = new Stack();
    this.outbound = new Stack();
}

Queue.prototype.push = function(val) {
    this.inbound.push(val);
    if (this.inbound.length > 1) {
        const temp = {};
        for (let i = this.length - 1, j = 0; i >= 0; i--, j++) {
            temp[j] = this.container[i];
        }
        this.outbound.container = temp;
    }
    return this.length;
};

Queue.prototype.pop = function() {
    const res = this.outbound.pop();
    if (this.outbound.length > 1) {
        const temp = {};
        for (let i = this.length - 1, j = 0; i >= 0; i--, j++) {
            temp[j] = this.container[i];
        }
        this.inbound.container = temp;
    }
    return res;
};

module.exports = {Stack: Stack, Queue: Queue};
