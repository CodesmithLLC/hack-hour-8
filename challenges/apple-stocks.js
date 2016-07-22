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
  // find greatest difference between two price points
  // testing for max and min may fail, as 9am = 1000 10am = 200, loss 800
// test case : 10am 500 9pm  700, max profit was 200
// poss: find min, then check for highest value after that min's index
//  poss fail -> if the min is at the end or near end
  var buyLow = Math.min(...stock_prices_yesterday);
  var buyLowIndex = stock_prices_yesterday.indexOf(buyLow);
  var sellHigh = stock_prices_yesterday[buyLowIndex+1]
  var maxProfit = sellHigh - buyLow;

  for(var i = buyLowIndex + 1; i < stock_prices_yesterday.length; i++){
    if(stock_prices_yesterday[i] - buyLow > maxProfit){
      maxProfit = stock_prices_yesterday[i] - buyLow;
    }
  }
  return maxProfit;
}

 // above fails if difference from non min is greater than min

console.log(bestProfit([112, 30, 102, 100, 6, 88, 2342, 61213, 1, 1, 3, 6, 1900]));

module.exports = bestProfit;
