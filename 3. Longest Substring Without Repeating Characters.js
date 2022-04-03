/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let l = 0;
    let r = 0;
    let result = 0;
    while(r<s.length){
        if(map.has(s[r])){
            map.delete(s[l]);
            l++;
        }else{
            map.set(s[r],s[r]);
            r++;
        }
        result = Math.max(map.size,result)
    }
    return result;
};
