/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let output = [];
    let n = 0;
    let l = 0;
    let r = 0;
    let el = 0;
    let er = 0;
   for(let i = 0 ; i < s.length ; i++){
       l = i;
       r = i;
       el = i;
       er = i+1;
       while(l > -1 && r < s.length){
           if(s[l] === s[r]){
               //output.push(s.substring(l,r+1));
               l--;
               r++;
               n++;
           }else{
               break;
           }
       }
       while(el > -1 && er < s.length){
           if(s[el] === s[er]){
               //output.push(s.substring(el,er+1));
               el--;
               er++;
               n++;
           }else{
               break;
           }
           }
       }
     
   
    //console.log(output);
    return n;
};
