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
  const price = [...stock_prices_yesterday];
  let minPrice = Number.POSITIVE_INFINITY;
  let highestProfit = 0;

  for (let i = 0; i < input.length; i++) {
    if (price[i] < minPrice) minPrice = price[i];
    if (price[i] - minPrice > highestProfit) highestProfit = price[i] - minPrice;
  }

  return highestProfit;
//  failed solution 1
//  const sorted = stock_prices_yesterday.sort((a, b) => a - b);
//  return sorted[sorted.length - 1] - sorted[0];
}

module.exports = bestProfit;
