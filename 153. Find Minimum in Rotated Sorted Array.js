/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let start = 0;
    let end = nums.length -1;
    let result = nums[0];
    let mid;
    while(start <= end){
        mid = Math.floor((start + end)/2);
        result = Math.min(result,nums[mid],nums[start]);
        if(nums[mid] >= nums[start]){
            
            start = mid + 1;
           
            
        }else{
            end = mid - 1;
        }
    }
    return result;
};
