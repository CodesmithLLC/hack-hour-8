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
	var origArr = stock_prices_yesterday;
	var max = Math.max(...origArr);
	var min = Math.min(...origArr);
	var maxTime = origArr.indexOf(max);
	var minTime = origArr.indexOf(min);
	var buyTime;
	var sellTime;
	
	var removed = [];
	while (maxTime < minTime){
		removed.push(origArr.splice(maxTime, 1)[0]);
		max = Math.max(...origArr);
		maxTime = origArr.indexOf(max);
		minTime = origArr.indexOf(min);
	}
	sellTime =  maxTime + removed.length;
	buyTime = minTime + removed.length; 
	return "buy: " + buyTime + " sell: " + sellTime; 
	
	

}
module.exports = bestProfit;
