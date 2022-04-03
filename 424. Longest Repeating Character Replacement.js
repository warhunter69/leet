/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let map = new Map();
    let l = 0;
    let r = 0;
    let result = 0;
    let window = 0;
    let max = 0;
    
    while(r < s.length){
        window = 1 + (r-l);
        if(map.has(s[r])){
            
            map.set(s[r],map.get(s[r])+1);
        
           }else{
            map.set(s[r],1);
             
        }
        max = getMax(map);
    
        if(window - max[1]<= k){
           
            result = Math.max(window,result);
        }else{
            map.set(s[l],map.get(s[l])-1);
            l++
            
        }
        r++;
    }
    return result;
};
let getMax = function (map){
    let max = [...map.entries()].reduce((a, e ) => e[1] > a[1] ? e : a)
    return max;
}
