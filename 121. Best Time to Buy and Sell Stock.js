/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    profit = findProfit(0,prices);
    return profit
};

let findProfit = function(profit,arr){
    
    let min = findMin(arr);
    let arrMax = arr.splice(arr.indexOf(min)+1)
    let arrMin = arr.splice(0,arr.indexOf(min))
    let max = findMax(arrMax);
    t_profit = max - min
    if(t_profit > profit){
        profit = t_profit
    }
   
   
    if(arrMin.length === 0){
        return profit
    }
    return findProfit(profit,arrMin);
    
   
}
let findMin = function(arr){
    let min = 9999999
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i]<min){
            min = arr[i];
        }
    }
    return min
}
let findMax = function(arr){
    let max = -9999
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max
}
