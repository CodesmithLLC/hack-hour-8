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
	x.sort((a, b) => {
		return a - b;
	});
	y.sort((a, b) => {
		return a - b;
	});
	let max;
	let counter = 0;
	let j = 0;
	x[x.length - 1] < y[y.length - 1] ? max = x[x.length - 1] : max = y[y.length - 1];
	for (let i = 1; i < max; i++) {
		for (let j = 0; j < x.length; j++) {
			if (i > x[j] && i < x[j + 1]) {
				if (i > y[j] && i < y[j + 1]) {
					counter++;
				}
			}
		}
	}
	return counter;
}

module.exports = newIntersections;
