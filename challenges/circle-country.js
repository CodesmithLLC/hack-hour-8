/**
 *  Circle Country is a country that contains several circular-shaped districts.
 *  Some districts may be situated inside other districts, but their borders do not intersect or touch.
 *  Tyus is a resident of Circle Country. When he travels between two locations, he always tries to cross the fewest number of district borders as possible.
 *
 *  You are given an array x, an array y, and an array r
 *
 *    - (x[i],y[i]) are the coordinates of the i-th circle's center and r[i] is its radius
 *
 *  In addition to the arrays, you are also given the numbers start_x, start_y, end_x, and end_y
 *
 *    - (start_x, start_y) are Tyus' starting coordinates and (end_x, end_y) are Tyus' destination coordinates
 *
 *
 *  Write an efficient algorithm for finding the minimum number of district borders Tyus must cross in order to get from
 *  (start_x, start_y) to (end_x, end_y)
 *
 *  Constraints:
 *    - x, y and r will each contain the same number of elements
 *    - (start_x, start_y) and (end_x, end_y) will never lie on a circle's border
 *    - no circle borders intersect/touch (but they can be nested)
 *
 */
/*
Pseudo code
Compare (x - center_x)^2 + (y - center_y)^2 to Radius^2.
If < coordinates are inside the circle
If === coordinates are points on circle
if > coordinates are outside the circle

Take the start and end coordinates and determine number of circles the coordinates are inside of. 
Return max of the number os circles
*/

function coorInside(x, y, center_x, center_y, circle_radius){
	return Math.pow(x - center_x, 2) + Math.pow(y - center_y, 2) < Math.pow(circle_radius, 2) ? true : false;
}

function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
	var startCount = 0;
	var endCount = 0;
	for(var i = 0; i < x.length; i++){
		if(coorInside(start_x, start_y, x[i], y[i], r[i])){
			startCount++;
		}
		if(coorInside(end_x, end_y, x[i], y[i], r[i])){
			endCount++;
		}
	}

	return Math.max(startCount,endCount);
}

// var xc = [0,0,0]
// var yc = [0,0,0]
// var rc = [2,4,10]
// var startx = 0
// var starty = 0
// var endx = 9
// var endy = 0

console.log(circleCountry(xc,yc,rc,startx,starty,endx,endy))

module.exports = circleCountry;
