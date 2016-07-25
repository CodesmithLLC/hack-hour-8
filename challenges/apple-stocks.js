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

function bestProfit(stockPricesYesterday) {
  const spy = stockPricesYesterday;
  const len = spy.length;
  let i;
  let j;
  let changeInPrice = Number.NEGATIVE_INFINITY;
  let maxChangeInPrice = Number.NEGATIVE_INFINITY;

  if (len < 2) return 0;

  for (j = 1; j < len; j++) {
    for (i = 0; i < len - 1; i++) {
      changeInPrice = spy[j] - spy[i];
      maxChangeInPrice = Math.max(changeInPrice, maxChangeInPrice);
      if (changeInPrice < 0 || changeInPrice < maxChangeInPrice) {
        continue;
      }
    }
  }

  return maxChangeInPrice > 0 ? maxChangeInPrice : 0; // need to figure out why this didn't pass
}

module.exports = bestProfit;
