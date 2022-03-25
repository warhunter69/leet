/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = -9999;
    let start = 0;
    let end = 0;
    let max = -99999;
    for(let i = 0 ; i < nums.length ; i++){
        sum += nums[i];
        if(sum < nums[i]){
            sum = nums[i];
            start = i;
        }
        if(sum > max){
            max = sum;
            end = i;
        }
    }
    return max
};
