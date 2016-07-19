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
	let highestStock = 0;

	if (stock_prices_yesterday === undefined) {
		return 0;
	}

	for (let key in stock_prices_yesterday) {
		if (stock_prices_yesterday[key] === undefined) {
			return 0;
		} else {
			if (highestStock < stock_prices_yesterday[key]) {
				highestStock = stock_prices_yesterday[key];
			}
		}
	}

	return highestStock;
}

module.exports = bestProfit;
