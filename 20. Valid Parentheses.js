/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let openning = ['(','[','{'];
    let closing = [')',']','}'];
    for(let i = 0 ; i < s.length ; i ++){
        if(openning.includes(s[i])){
            stack.push(s[i]);
        }else{
            element = stack.pop()
            if(element !== openning[closing.indexOf(s[i])]){
                console.log(element,openning[closing.indexOf(s[i])])
                return false
            }
        }
    }
    if(stack.length === 0){ return true}
    else{return false}
       
};
