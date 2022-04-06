/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let output = [];
    let n = 0;
   for(let i = 0 ; i < s.length ; i++){
      for(let j = i ; j < s.length ; j++){
           if(checkPalindrom(s,i,j))
                n++;
       }
   }
    return n;
};
let checkPalindrom = function(s,i,j){
    while(i <= j){
        if(s[i] ===s[j]){
            i++;
            j--;
        }else{
            return false;
        }
    }
    return true;
    
}
