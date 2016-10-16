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

function bestProfit(prices) {
  if(!prices || prices.length === 0) return 0;
  //Straightforward, O(n^2) solution - not really efficient
  // var maxDiff = 0;
  // stock_prices_yesterday.forEach(function(ele,idx){
  // stock_prices_yesterday.forEach(function(el,id){
  // if(maxDiff < (ele - el) ) maxDiff = ele - el;
  // })
  // })
  // return maxDiff;
  //////////////

  // This should be O(n) time complexity
  let max,
    i,
    diffs = [],
    min = prices[0],
    len = prices.length;

  for (i = 1; i < len; i++) {
    if (prices[i] < prices[i + 1]) {
      min = prices[i] < min ? prices[i] : min;
    }
    if (prices[i] > prices[i - 1]) {
      max = !max || max < prices[i] ? prices[i] : max;
    }
  }

  return !max ? 0 : max - min;
}

// console.log(bestProfit([1, 6, 15, 4, 9, 3, 22]));
// console.log(bestProfit([400, 300, 800, 600, 100]));
// console.log(bestProfit([5, 4, 8, 9, 2]));
// console.log(bestProfit([8, 5, 4, 3, 2, 9, 2]));
module.exports = bestProfit;
