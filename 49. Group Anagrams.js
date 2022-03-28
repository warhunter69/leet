/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();
    let output = []
    for(let i = 0 ;  i < strs.length ; i++){
       let str = strs[i].split('').sort().join('');
        let x = map.get(str)
        if(x === undefined){
            map.set(str,[strs[i]]);
        }else{
            x.push(strs[i])
            map.set(str,x);
        }
    }
    console.log(map)
    map.forEach((value,key)=>{
        output.push(value)
                
                })
    return output
};
