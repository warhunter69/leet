/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let temp = 0;
    for(let i = 0 ; i < height.length ; i++){
        for(let j = 0 ; j < height.length ; j++){
            if(j!==i){
                
                temp = Math.min(height[i],height[j])*(j-i);
                if(temp > max){
                    max = temp;
                }
    
            }
        }
    }
    return max
};
