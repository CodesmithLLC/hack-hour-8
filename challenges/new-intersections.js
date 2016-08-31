/**
 *
 * You are given an array x and an array y that represent the coordinates of several OLD points
 * 
 *   - x is the array of x-coordinates and y is the array of y-coordinates 
 *   - (x[i], y[i]) correspond to coordinates of the i'th OLD point
 *
 * Write an algorithm to find the number of NEW points that can be placed 
 * such that there are OLD points directly above, below, to the left, and to the right of the NEW point
 *
 *   - 'OLD directly above NEW' means the NEW x-coordinate = OLD x-coordinate & NEW y-coordinate < OLD y-coordinate
 *
 * Constraints and Notes:
 *
 * 	 - x and y will contain the same number of elements
 * 	 
 */

/*
Intersecting new point meets the following criteria:
New X === 2 Old X with same value && New Y is > Old Y and < Old Y
New Y === 2 Old Y with same value && New X is > Old X and < Old X
Approach:
  Find all the X coordinates with the same values
  Find all the Y coordinates that have the same values but also are with range of the Y values in the matched X set && X coordinate pair > && < x coordinate of matched X coordinates 
  If the combined matched X and matched Y is not an old coordinate then count the number
  Return the number of new points that can be placed
*/

function newIntersections(x, y){
  var count = 0;


  return count;
}



module.exports = newIntersections;
