/**
 * Create a stack.Then create a queue using two stacks.
 */




/*
Approach: For dequeueeueue, we want to copy the contents of stack1 to stack2, shift off of
stack 2 for the dequeue(since we pushed onto stack1 for the enqueue), but we need to 
modify stack1 so the shifting properly updates the queue.
*/



function Stack() {
    this.storage = []; 
    this.length = 0; 

    Stack.prototype.push = function(val){
        this.storage[this.length] = val; 
        this.length++
        return this.length; 
    }
    
    Stack.prototype.pop = function(){
        if (this.length === 0) return undefined; 
        let popped = this.storage[this.storage.length-1];
        delete this.storage[this.length-1];
        this.length--; 
        return popped; 
    }
    Stack.prototype.shift = function(){
        if (this.length === 0) return undefined; 
        let shifted = this.storage[0]; 
        for (var i = 0; i < this.length-1; i++){
            this.storage[i] = this.storage[i+1]; 
        }
        delete this.storage[this.length-1]; 
        this.length--; 
        return shifted; 
    }
    Stack.prototype.unshift = function(val){
        for (var j = this.length; j >= 0; j--){
            this.storage[j] = this.storage[j-1];
        }
        this.storage[0] = val; 
        this.length++; 
        return this.length; 
    }
    
}

/*
 Queue Class
*/


function Queue() {

    var stack1 = new Stack(); 
    var stack2 = new Stack(); 
    this.length = 0;  
    this.storage = stack1.storage; 
    

    Queue.prototype.enqueue = function(val){
        stack1.push(val); 
        this.length = stack1.length;
        return stack1.length; 
    }
    Queue.prototype.dequeue = function(){
         if (stack1.length === 0) return undefined; 
         stack2.storage = [];
         stack2.length = 0; 
        for (var i = 0; i < stack1.length; i++){
            stack2.push(stack1.storage[i]); 
        }
        let shifted = stack2.storage[0]; 
         console.log('stack2', stack2)
        for (var j = 0; j < stack2.length; j++){
            stack2.storage[j] = stack2.storage[j+1]; 
            stack1.storage[j] = stack1.storage[j+1];
        }
        delete stack1.storage[stack1.length-1]
        stack1.length--;
        this.length = stack1.length; 
        this.storage = stack1.storage; 
        return shifted; 
    }

}


module.exports = {Stack: Stack, Queue: Queue};
