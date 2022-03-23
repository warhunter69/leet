/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = -9999;
    let minIndex = 0;
    let min =9999;
    for(let i = 0 ; i < prices.length ; i++){
        if(prices[i] < prices[minIndex]){
            minIndex = i;
        }
        let p = prices[i]-prices[minIndex]
        if(prices[i]-prices[minIndex] > profit ){
            profit = p;
        }
    }
    return profit
};
