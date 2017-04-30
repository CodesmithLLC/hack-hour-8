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
  if (stock_prices_yesterday === [] || Array.isArray(stock_prices_yesterday) === false) return 0;
  for (var i = arr.length - 1; i > 0; i--) {
  for (var k = i - 1; k >= 0; k--) {
    if (arr[i] - arr[k] > biggest) biggest = arr[i] - arr[k];
  }
}
return biggest <= 0 ?  0 : biggest;
}

module.exports = bestProfit;
