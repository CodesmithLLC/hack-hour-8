/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
    this.storage = [];
    this.add = function(item) {
        this.storage.push(item);
    }
    this.remove = function() {
        return this.storage.pop();
    }

    this.length = function() {
        return this.storage.length;
    }
}


/**
* Queue Class
*/


function Queue() {
    this.inbox = new Stack();
    this.outbox = new Stack();

    this.enqueue = function(item) {
        this.inbox.add(item);
    }

    this.dequeue = function() {
        if (this.outbox.length() === 0) {
            while (this.inbox.length() > 0) {
                this.outbox.add(this.inbox.remove());
            }
        }

        return this.outbox.remove();
    }
}

module.exports = {
    Stack: Stack,
    Queue: Queue
};
