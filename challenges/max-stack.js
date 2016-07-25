/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  // body...
  var $ = this;
  $.length = 0;
  $.collection = {};
  $.max = 0; //keep track of max at all times, to get that snazzy
  //O(1) timing when locating it


  ///////////////////
  $.push = function(baz){
    $.collection[$.length++] = baz;
    if(baz > $.max) $.max = baz;
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

    if(temp === $.max){
      $.max = 0;
      for(var k in $.collection){
        if($.collection[k] > $.max) $.max = $.collection[k]
      }
    }

    return temp;
  }
  //////////////////

  //////////////////
  $.getMax = function(){
    if($.length <= 0){
      return undefined;
    }
    return $.max;
  }
  //////////////////
}

module.exports = Stack;
