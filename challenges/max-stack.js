/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  let arr;
  let arrLength = 0;
  let maxVal;
  return {
  "push" : function(value){
    const arrAdd = new Array(arrLength + 1);
    for (let i = 0; i < arrLength; i++) {
      arrAdd[i] = arr[i];
    }
    arrAdd[arrLength] = value;
    arr = arrAdd;
    arrLength++;
    // testing for Max with every push to keep O(1) of get max
    if (arrLength === 1) {
      maxVal = arr[0]
    } else {
      if (maxVal < value) {
        maxVal = value;
      }
    }
    return arrLength;
  },
  "pop": function() {
    if (arrLength > 0) {
      const arrPop = new Array(arrLength - 1);
      const elRemove = arr[0];
      for (let i = 1; i < arrLength; i++) {
        for (let j = 0; j < arrLength - 1; j++) {
          arrPop[j] = arr[i];
        }
      }
      arrLength--;
      arr = arrPop;
      return elRemove;
    }
  },
    "getMax": function() {return maxVal;}
  };
}

module.exports = Stack;
