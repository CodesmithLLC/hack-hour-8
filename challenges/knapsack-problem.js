/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function solveKnapsack(items, weightAvailable) {
	let weightCounter = 0;
	let sum = 0;

	// as long as the amount of objects we have is less than available weight
	if (weightCounter <= weightAvailable) {
		for (let key in items) {

			// PSEUDO: add current value to the sum
			sum = sum + items[key]['value']

			// subtract weight available with weight of item
			weightAvailable - items[key]['weight']

			// then move on to the next item and subtract weight / add value
		}
	}

	// return sum of maximum value
	return sum;
};

module.exports = solveKnapsack;
