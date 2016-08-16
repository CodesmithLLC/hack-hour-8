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
   var max = [0, 0];
   var min = [10000, 0];
   var diff = [0, 0];
   for (var j = stock_prices_yesterday.length - 1; j >= 0; j--) {
     if (stock_prices_yesterday[j] > max[0]) {
       max = [stock_prices_yesterday[j], j];
     }
     for (var i = 0; i < j; i++) {
       if (stock_prices_yesterday[i] < min[0]) {
         min = [stock_prices_yesterday[i], i];
       }
     }
     if (diff[0] < max[0] - min[0]) diff = [max[0] - min[0], max[1], min[1]];
   }
   if (diff <= 0) return 0;
   return diff[0];
 }

module.exports = bestProfit;
