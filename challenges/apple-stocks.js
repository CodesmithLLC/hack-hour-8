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
<<<<<<< HEAD
  var max = 0;
  // if (isNaN(stock_prices_yesterday[0])) return 0;
  stock_prices_yesterday.reduce(function(a, b) {
    if (isNaN(a)) {
      max = 0;
      return a;
    }
    if (isNaN(b)) {
      max = 0;
      return b;
    }
    if ((a - b) > max) max = a - b;
    if (b > a) return b;
    else return a;
  });
  return max > 0 ? max : 0
}

console.log(bestProfit([2,7,3,1,11,'bfafd',5,3,10,3,5]));
=======

}
>>>>>>> 54305344fd1d336bf5cfc0b346523a52f798c1f0

module.exports = bestProfit;
