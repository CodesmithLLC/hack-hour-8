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
	if(items.length === 0) return 'False input of items available for knapsack';
	if(weightAvailable <= 0) return 'False input of weight available in knapsack';
	let maxValue = 0;
	let newTotal = 0;
	function recurseKnapsack(items, weightAvailable, newTotal){
		if(weightAvailable === 0 || items.length === 0){
			if(newTotal > maxValue) return maxValue = newTotal;
			else return;
		}
		if(weightAvailable - items[0].weight >= 0){
			newTotal += items[0].value;
			return recurseKnapsack(items.slice(1), weightAvailable - items[0].weight, newTotal);
		}
		else return recurseKnapsack(items.slice(1), weightAvailable, newTotal);
	}
	items.forEach(function(item, index){
		recurseKnapsack(items.slice(index), weightAvailable, 0);
	});
	return maxValue;
}
module.exports = solveKnapsack;
