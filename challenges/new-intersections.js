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

 //INPUT: x-array, y-array

function newIntersections(x, y){
	//instantiate counter
	//check to see if any duplicates in x array and duplicates in y array - get index 
	//if x array-duplicate, store to cache
	//if y array-duplicate, store to cache
	//check value of x duplicate and compared to index of y array in x array - check if between
	//check value of y duplicate and compared to index of x array in y array - check if between
	//if between, increment counter
}

module.exports = newIntersections;
