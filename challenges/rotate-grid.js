/* You are given a NxN grid of elements represented by a 2D array. The ith
 * nested array represents the ith row in the grid.
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

// the array at grid[n-1] needs to become the [0] positions of
//
// grid[0][0] becomes grid[0][2]
// grid[0][1] becomes grid[1][2]
// grid[0][2] becomes grid[2][2]
// grid top horizontal row becomes grid last vertical row

// grid[1][0] becomes grid[0][1]
// grid[1][1] becomes grid[1][1] ***
// grid[1][2] becomes grid[2][1]
// grid middle horizontal row becomes grid middle vertical row

// grid[2][0] becomes grid[0][0]
// grid[2][1] becomes grid[1][0]
// grid[2][2] becomes grid[2][0]
// grid last horizontal row becomes grid first vertical row

// spiral in from the corners
// *** if n%2===1, the item at grid[Math.ceil(n/2)][Math.ceil(n/2)] doesn't move
// in place idea:
// first pass: i=0, j=0,
// temp = grid[0][n-1]; example(3)
// grid[0][n-1](3) =
//   for (i = 0; i < n; i++) {
//   for (j = 0; j < n; j++) {
//     temp = grid[i][j];
//     grid[i][j] =
//   }
// }

function rotateGrid(grid, n) {
  const m = grid;
  if (m.length !== n || m.length === 0) return false;
  let r; // row
  let f; // first row
  let l; // last row
  let i;
  let j; // counter for each incrementation
  let temp;

  for (r = 0; r < Math.floor(n / 2); r ++) {
    f = r;
    l = n - 1 - r;
    for (i = f; i < l; i++) {
      j = i - f;
      temp = m[f][i];
      m[f][i] = m[l - j][f];
      m[l - j][f] = m[l][l - j];
      m[l][l - j] = m[i][l];
      m[i][l] = temp;
    }
  }
  return m;
}

module.exports = rotateGrid;
