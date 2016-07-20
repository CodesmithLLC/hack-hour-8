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

  //Straightforward, O(n^2) solution - not really efficient
  // var maxDiff = 0;
  // stock_prices_yesterday.forEach(function(ele,idx){
    // stock_prices_yesterday.forEach(function(el,id){
      // if(maxDiff < (ele - el) ) maxDiff = ele - el;
    // })
  // })
  // return maxDiff;
  //////////////

  var cloneStocks = stock_prices_yesterday.slice(0);

  var sorted = cloneStocks.sort(function(a,b){
    return a - b;
  })

  var revSorted = sorted.reverse();
  var maxDiff = 0;

  revSorted.forEach(function(ele,idx){
    stock_prices_yesterday.forEach(function(el,id){
      console.log(ele,el);
      if(ele === el) return stock_prices_yesterday.splice(id, 1);
      if((ele > el) && (ele - el > maxDiff)) maxDiff = ele - el;
    })
  })
  return maxDiff;
}


console.log(bestProfit([4,3,8,6,1]));
// module.exports = bestProfit;
