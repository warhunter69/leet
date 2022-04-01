/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0;
    let r = height.length-1;
    let result = 0;
    let area = 0;
    for(let i = 0 ; i < height.length ; i++){
        result = Math.min(height[l],height[r])*(r-l);
        if(result > area)
            area = result;
        
        if(height[l]>=height[r]){
            r--;
        }else if(height[r]>height[l]){
            l++;
        }
    }
    return area
};
