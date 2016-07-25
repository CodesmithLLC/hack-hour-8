/**
 * Create a stack.Then create a queue using two stacks.
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
        let popped = this.storage[this.storage.length-1];
        delete this.storage[this.length-1];
        this.length--; 
        return popped; 
    }
    Stack.prototype.shift = function(){
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

module.exports = {Stack: Stack, Queue: Queue};
