// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.

function knightjumps(str) {
/* Approach: Knights can move a number of different ways: 
1 up and 2 left, 1 up and 2 right, 2 up and 1 left, 2 up and 1 right, 1 down and 2 left, 1 down 
and 2 right, 2 down and 1 left and 2 down and 1 right.  So we would add and substract based on the 
given location and the range of the board, which is 0, 8 for x and 0,8 for y.  

Because x and y are the same, we can use a single check (is the propsed move spot between 1 and 8?)
for both the x and y coordinate.  

We can first remove the parens from the input, then split the string, x cood will
be arr[0], y coord will be array[1], then use map to turn the strings in arr into 
nums 

Better would be: is X > 2 and < 6, then all x coordinates are good, same with Y, which would
yield 8 options.  If x === 2 and y < 6, 6 options available (not x -2 options), if x === 1 and y < 6, 
4 options, etc.  
*/  
  let res = 0; 
  let arr = str.replace(/[()]/g, '').split(' '); 
  let newArr = arr.map(function(elem){
      return parseInt(elem); 
  }); 
      
  if (newArr[0] + 1 < 8 && newArr[1] + 2 < 8 ) res++; 
  if (newArr[0] + 1 < 8 && newArr[1] - 2 > 0 ) res++;
  if (newArr[0] + 2 < 8 && newArr[1] + 1 < 8 ) res++; 
  if (newArr[0] + 2 < 8 && newArr[1] - 1 > 0 ) res++; 
  if (newArr[0] - 1 > 0 && newArr[1] + 2 < 8 ) res++; 
  if (newArr[0] - 1 > 0 && newArr[1] - 2 > 0 ) res++;
  if (newArr[0] - 2 > 0 && newArr[1] + 1 < 8 ) res++; 
  if (newArr[0] - 2 > 0 && newArr[1] - 1 > 0 ) res++; 
  return res;
}

module.exports = knightjumps;
