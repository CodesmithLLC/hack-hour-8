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
/*Approach: All in 1 for loop.  Max, Min, isNaN, noProfit. So the tricky thing is that you can't sell stock BEFORE you buy it.  So this
ain't just max - min. 
}
*/
if (isNaN(...stock_prices_yesterday)) return 0; 
if (stock_prices_yesterday.length === 0) return 0; 
if (stock_prices_yesterday.length === 1) return 0; 
let max =stock_prices_yesterday[0] , min =stock_prices_yesterday[0] ; 
for (var i = 0; i < stock_prices_yesterday.length; i++){
    if (isNaN(stock_prices_yesterday[i])) return 0; 
    else if (stock_prices_yesterday[i] > max){
        max = stock_prices_yesterday[i]; 
    }
    else if (stock_prices_yesterday[i] < min){
        min = stock_prices_yesterday[i]; 
    }
}
if (stock_prices_yesterday.indexOf(min) < stock_prices_yesterday.indexOf(max)) return max-min;

let arrMaxCheck = stock_prices_yesterday.slice(0, stock_prices_yesterday.indexOf(max)+1)
let arrMinCheck = stock_prices_yesterday.slice(stock_prices_yesterday.indexOf(min)); 
console.log('maxArr', arrMaxCheck, 'minArr', arrMinCheck); 
let maxDiff = max - Math.min(...arrMaxCheck); 
let minDiff = Math.max(...arrMinCheck) - min; 
if (maxDiff === 0 && minDiff === 0)return 0; 
if (maxDiff >= minDiff) return maxDiff;
return minDiff; 


}

module.exports = bestProfit;
