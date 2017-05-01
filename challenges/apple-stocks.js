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

function bestProfit(stp) {
	if(typeof stp[0] !== 'number') return 0;
	var low = stp[0];
	var max = stp[1]-low;
	stp.forEach(function(time){
		if(typeof time !== 'number') return 0;
		if(time < low) low = time;
		if(time - low > max) max = time-low;
	})
	if( max < 1 ) return 0;
	return max;
}

module.exports = bestProfit;
