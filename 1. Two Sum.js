/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for(let i = 0 ; i < nums.length ; i++){
        map.set(nums[i],i);
    }
    for(let i = 0 ; i<nums.length ;i++){
        let j = map.get(target-nums[i]) 
        if(target - nums[i]===nums[j] && i != j)
            return [i,j]
            
    }
};
