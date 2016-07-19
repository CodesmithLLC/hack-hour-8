/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */

function bestProfit(stock_prices_yesterday) {
	var deltas = [];
	var peak;
	var peakTime;
	var valley;
	var valleyTime;
	var delta;
	var i = 0;
	var current = stock_prices_yesterday[i];
	var next = stock_prices_yesterday[i+1];
	console.log(current, next);
	while(i < stock_prices_yesterday.length){
		console.log('hi');
		findValley(current, next, i);
		findPeak(current, next, i);
	}
	function findValley(current, next, i){
		while(current > next){
			i++;
			current = stock_prices_yesterday[i];
  	  next = stock_prices_yesterday[i+1];
		}
		valley = current;
		valleyTime = i;
		console.log("valley ", current, next, i);
	}

	function findPeak(current, next, i){
		while(current<next){
			i++;
			current = stock_prices_yesterday[i];
  	  		next = stock_prices_yesterday[i+1];
		}
		peak = current;
		peakTime = i;
		delta = peak - valley;
		console.log("peak ",current, next, i);
		deltas.push(delta);
	}
	console.log(deltas);
	var max = deltas.reduce(function(max, item){
		if (item > max) return item;
		else return max;
	});
	return max;
}


console.log(bestProfit([11,10,6,2,9,1,5,4,20]));
module.exports = bestProfit;
