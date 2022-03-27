/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let prefix = [];
    let postfix = [];
   
    for(let i = 0,j = nums.length-1 ; i < nums.length && j > -1 ; i++,j--){
        if(i-1 < 0){
            prefix[i] = nums[i];
            
        }else{
            prefix[i] = nums[i]*prefix[i-1];

        }
        
        
        if(j+1 ===nums.length){
            postfix[j] = nums[j];
        }else{
            postfix[j] = nums[j]*postfix[j+1];
             }
        
  }
    let output = [];
    for(let i = 0 ; i < nums.length ; i++){
        if(i-1 < 0){
            output[i] = 1*postfix[i+1];
            
        }else if(i+1 === nums.length){
            
            output[i] = prefix[i-1]*1;
            
        }else{
             output[i] = prefix[i-1]*postfix[i+1];
        }
       
    }
    return output
};
