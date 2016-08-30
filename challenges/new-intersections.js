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

function newIntersections(x, y){
  x.sort((a,b)=> a-b);
  y.sort((a,b)=> a-b);
  xnew = x.slice(1,x.length-1)
  ynew = y.slice(1,y.length-1)
  xmin = Math.min(...xnew)
  xmax = Math.max(...xnew)
  ymin = Math.min(...ynew)
  ymax = Math.max(...ynew)
  return (xmax - xmin) * (ymax - ymin)
}

module.exports = newIntersections;
