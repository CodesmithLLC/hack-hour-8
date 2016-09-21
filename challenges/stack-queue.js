/**
 * Create a stack.Then create a queue using two stacks.
 */
function Stack() {
  var arr = new Array();
  this.push = function(val) {
  	arr[arr.length] = val;
  	return arr.length;
  };
  this.pop = function() {
  	var last = arr.length-1;
  	var holder = arr[last];
  	arr = arr.slice(0,last);
  	return holder;
  };
}

/**
* Queue Class
*/
//first in, last out
function Queue() {
  const Q1 = new Stack;
  const Q2 = new Stack;

  this.enqueue = function(num){
      for (var i = Q1.length-1; i >= 0; i--){
        Q2.push(Q1[i]);
      }
      Q2.push(num);
    }
    for (var y = 0; y < Q2.length; y++){
      Q1.push(Q2[i]);
    }
  }
  this.dequeue = function(){
    return Q1.pop();
  }
}

module.exports = {Stack: Stack, Queue: Queue};
