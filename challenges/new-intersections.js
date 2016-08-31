'use strict';
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

function newIntersections(x, y) {
  if (x.length < 4 || y.length < 4) return [];

  let xCache = makeCache(x),
    // yCache = makeCache(y),
    xKeys = Object.keys(xCache),
    // yKeys = Object.keys(yCache),
    xIntersects = [],
    yIntersects = [];

  for(let k in xCache){
    if(xCache[k].length > 1){
      var pairs = pairPermutes(xCache[k]);
      pairs.forEach( (ele, idx) => {
        y.forEach( (el, id) => {
          if(el > Math.min(y[ele[0]], y[ele[1]]) && el < Math.max(y[ele[0]], y[ele[1]])){
            xIntersects.push(k)
            yIntersects.push(el)
          }
        })        
      })
    }
  }

  return [xIntersects, yIntersects];
}

function makeCache(array) {
  let cache = {};
  array.forEach((ele, idx) => {
    if (cache[ele]) {
      cache[ele].push(idx)
    } else {
      cache[ele] = [idx];
    }
  })
  return cache;
}

function pairPermutes(array){
  var result = [],
    len = array.length;
  array.forEach( (ele, idx) => {
    for(var i = idx + 1; i < len - 1; i++){
      result.push([ele, array[i]]);
    }
  })
  return result;
}

module.exports = newIntersections;
