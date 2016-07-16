/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  var obj = {};
  obj.length = 0;
  obj.max = 0;
  obj.push = function(arr){
  				obj[obj.length] = arr;
  				obj.length++;
  				var keys = Math.max(...Object.keys(obj).filter(function(x){return x>=0 }).map(function(y){return obj[y]}))
  				obj.max= keys
  				return obj.length;
				 };
  obj.pop = function(){
  				var temp = obj[obj.length];
  				delete obj[obj.length];
  				obj.length--;
  				var keys = Math.max(...Object.keys(obj).filter(function(x){return x>=0 }).map(function(y){return obj[y]}))
  				obj.max= keys
  				return temp;
				 };
  obj.getMax = function(){return obj.max};
  return obj;
}

module.exports = Stack;
