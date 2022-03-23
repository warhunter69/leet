/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    sarr = s.split('');
   
    tarr = t.split('');
    if(sarr.length !== tarr.length)
        return false
    sarr.sort();
    tarr.sort();
    
    for(let i = 0 ; i<sarr.length;i++){
        if(sarr[i]!==tarr[i]){
            return false
        }
    }
return true
}
