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

    //This should be O(n) time complexity
    var arr = stock_prices_yesterday.slice(),
        len = stock_prices_yesterday.length,
        cache = [],
        i = len - 3,
        max = Math.max(arr[len - 1], arr[len - 2]);
    min = Math.min(arr[len - 1], arr[len - 2]);

    for (; i >= 0; i--) {
        if (arr[i] > max) {
            cache.push(max - min);
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return Math.max(...cache);

}


// console.log(bestProfit([400, 300, 800, 600, 100]));
module.exports = bestProfit;
