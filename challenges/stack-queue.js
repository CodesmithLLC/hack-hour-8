/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {
  // body...
  var $ = this;
  $.length = 0;
  $.collection = {};

  ///////////////////
  $.push = function(baz){
    $.collection[$.length++] = baz;
    return $.length;
  }

  ///////////////////

  //////////////////
  $.pop = function(){
    if($.length <= 0){
      $.length = 0;
      return undefined;
    }
    var temp = $.collection[$.length - 1];
    delete $.collection[--$.length]

    return temp;
  }
  //////////////////

}



/**
* Queue Class
*/


function Queue() {

  var stack1 = new Stack();
  var stack2 = new Stack();

  //To replicate `adding` element to queue, we either place element in stack1
  //if there are no elements, or if there are elements, we move existing elements
  //to stack2, then add new element to stack1, then move back existing elements
  //that were added to stack2 to stack1, thus giving us the desired queue order
  this.enqueue = function(foo){
    if(stack1.length > 0){
      for(var k in stack1){
        stack2.push(stack1.collection[k]);
      }
    }else{
      return stack1.push(foo);
    }

    stack1.push(foo);
    for(var j in stack2){
      stack1.push(stack2.collection[j]);
    }
    return stack1.length;
  }

  //Since we have desired order in place in stack1, we simply pop from stack1
  //to return the first-most element added
  this.dequeue = function(){
    return stack1.pop();
  }
}

module.exports = {Stack: Stack, Queue: Queue};
