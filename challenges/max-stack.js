/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
    this.length = 0; 
    this.contents = []; 
    this.max = 0; 
    
  Stack.prototype.push = function(val){
    this.contents[this.length] = val; 
    this.length++; 
        if (val > this.max){
        this.max = val; 
        //console.log('max', this.max); 
    }
    return this.length; 
  
  };
  Stack.prototype.pop = function(){
    if (this.length === 0){
        return undefined; 
    }
    var res = this.contents[this.length-1]; 
    delete this.contents[this.length-1]; 
    this.length--; 
    if (this.max === res){
        this.max = 0; 
        for (var i = 0; i < this.length; i++){
            if (this.contents[i] >= this.max){
                this.max = this.contents[i]; 
            }
        }
        //console.log('new Max', this.max);
    }
  
    return res; 
  };
  
  
   Stack.prototype.getMax = function(){
    if (this.length === 0){
        return undefined; 
    }
    if (this.length === 1){
        return this.contents[0]; 
    }
    return this.max; 
  };
}

module.exports = Stack;