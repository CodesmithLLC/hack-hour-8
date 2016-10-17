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
 */

function newIntersections(x, y) {
  const xIntersects = [];
  const yIntersects = [];
  const xCache = makeCache(x);
  const xMap = Object.keys(xCache).filter((e) => {
    return xCache[e].length > 1;
  });

  const yCache = makeCache(y);
  const yMap = Object.keys(yCache).filter((e) => {
    return yCache[e].length > 1;
  });


  if (xMap.length && yMap.length) {
    xMap.forEach((e) => {
      const [a, b] = xCache[e];
      yMap.forEach((el) => {
        if (+el > Math.min(y[a], y[b]) && +el < Math.max(y[a], y[b])) {
          xIntersects.push(+e);
          yIntersects.push(+el);
        }
      });
    });
  }
  return xIntersects.length;
}


function makeCache(array) {
  const cache = {};
  array.forEach((ele, idx) => {
    if (cache[ele]) {
      cache[ele].push(idx);
    } else {
      cache[ele] = [idx];
    }
  });
  return cache;
}

// console.log(makeCache([1, 2, 3, 4, 3]));
// console.log(newIntersections([1, 3, 2, 2, 0], [2, 2, 1, 3, 3]));
module.exports = newIntersections;
