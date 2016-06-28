/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs (n) {

  function makeStair(num) {
    let stair = "";

    while(num > 0) {
      stair += "*";
      num--;
    }

    return stair;
  }


  function makeSpace(num) {
    let spaces = "";

    while (num > 1) {
      spaces += " ";
      num--;
    }

    return spaces;
  }


  let stairs = "";

  let spacesMade = n;
  for (let i = 1; i < n; i++) {
    stairs += makeSpace(spacesMade);
    stairs += makeStair(i);

    if(i + 1 !== n) {
      stairs += "\n";
    }

    spacesMade--;
  }

  stairs = stairs.replace(" ", "");
  stairs += "\n" + makeStair(n);
  return stairs;
}


module.exports = drawStairs;
