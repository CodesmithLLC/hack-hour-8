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
  var max = 0;
  stock_prices_yesterday.reduce(function(a, b) {
    if ((a - b) > max) max = a - b;
    if (b > a) return b;
    else return a;
  });
  return max;
}

// console.log(bestProfit([3,1,2,7,3,1,11,2,5,3,10,3,5]));

module.exports = bestProfit;
