// not passing edge case test

/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

// works but not exporting correctly???
function solveKnapsack(items, weightAvailable) {
  const mapCombinations = function(list) {
    const result = [];
    const f = (prefix, array) => {
      array.forEach((e, i) => {
        result.push(prefix.concat(e));
        f(prefix.concat(e), array.slice(i + 1));
      });
    };
    f([], list);
    return result;
  };

  const groups = mapCombinations(items);
  const maxArr = [];

  // console.log(groups.length);
  groups.forEach((ele) => {
    if (ele.length > 1) {
      let weight = 0;
      let value = 0;
      ele.forEach((el) => {
        weight += el.weight;
        value += el.value;
      });
      maxArr.push([weight, value]);
    } else {
      maxArr.push([ele[0].weight, ele[0].value]);
    }
  });

  return Math.max(...maxArr.filter((ele) => {
    return ele[0] <= weightAvailable;
  }).map((ele) => {
    return ele[1];
  }));
}

// let items = [{
// weight: 1,
// value: 3
// }, {
// weight: 2,
// value: 4
// }, {
// weight: 3,
// value: 5
// }];

// console.log(solveKnapsack(items, 5)); // returns 7 (from items[0] and items[1])
// solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
module.exports = solveKnapsack;
