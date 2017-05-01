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

//loop through x-coordinates array, look for another point with same x-coordinates and store them,
//loop through y-coordinates array, looking for matching y coordinates within x-coordinate range
function newIntersections(x, y){
	
	if(x.length<4) return 0;
	for(var i = 0; i < x.length-1; i++){
		for(var j = i + 1; j < x.length; j++){
			if(x[i] = x[j]){
				var xCoord = x[i];
				if(y[i]<y[j]){
					var y1 = y[i];
					var y2 = y[j];
				}
				else{
					var y1 = y[j];
					var y2 = y[i];
				}
				for(var k = 0; k < x.length; k++){
					if(y[k] < y2 && y[k] > y1 && x[k] ==== xCoord){
						
					}
				}
			}
		}
	}
}

module.exports = newIntersections;
