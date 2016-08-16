/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents
 * the ith row in the grid.
 *
 * Write a function to rotate the grid 90 degrees clockwise.
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *
 *                  rotateGrid(sampleGrid, 3);
 *
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 *
 * BONUS: Do this in place
 */

 function rotateGrid(grid, n) {
   var newGrid = JSON.parse(JSON.stringify(grid));
   var setRow;
   var setCol;
   var moveCount;
   for (var i = 0; i < n; i++) {
     for (var j = 0; j < n; j++) {
       setRow = i;
       setCol = j;
       moveCount = 0;
       for (k = 0; k < (n-1); k++) {
       	if (setRow === 0 && setCol !== (n-1)) setCol++;
         else if (setCol === (n-1) && setRow !== (n-1)) setRow++;
         else if (setCol === (n-1) && setRow === (n-1)) setCol--;
         else if (setCol === 0 && setRow === (n-1)) setRow--;
       }
       console.log('pos set', setRow, setCol)
       newGrid[setRow][setCol] = grid[i][j];
       console.log('updated grid', newGrid)
     }
   }
   return newGrid;
 }

 // var sampleGrid = [  [1, 2, 3],
 // 					[4, 5, 6],
 // 					[7, 8, 9]  ];
 //
 // rotateGrid(sampleGrid, 3);

 // incorrect answer:
 //[1, 2, 1]
 //[7, 5, 2]
 //[7, 9, 3]

 // correct answer:
 //[7, 4, 1]
 //[8, 5, 2]
 //[9, 6, 3]

module.exports = rotateGrid;
