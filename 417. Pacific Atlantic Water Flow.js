/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
 var pacificAtlantic = function(heights) {
    let output = [];
    let n = heights.length;
    let m = heights[0].length;
    
    for(let i = 0 ; i < n ; i++ ){
        for(let j = 0 ; j < m ; j++){
            if(bfs(heights,i,j))
                output.push([i,j]);
              
        }
    }
    return output;
};
let bfs = function(heights,i,j){
    let visited = new Set();
    let n = heights.length;
    let m = heights[0].length;
    let queue = [];
    queue.push([i,j]);
    visited.add([i,j]);
    let pacificOcean = false;
    let atlanticOcean = false;
    let x;
    while(!(queue === undefined || queue.length === 0)){

        x = queue.shift();
        i = x[0];
        j = x[1];
        if(i === 0 ||  j === 0)
            
            pacificOcean = true;
        
        if(i === n-1 || j === m-1)
            
            atlanticOcean = true;
        
        if(atlanticOcean&pacificOcean)
            return true;
        
        let north = i-1;
        let south = i+1;
        let east = j+1;
        let west = j-1;
        if(north >= 0 && !(visited.has(`${[north,j]}`))){
            if(heights[north][j] <= heights[i][j]){
                visited.add(`${[north,j]}`);
                queue.push([north,j]);
            }
          
        }
        if(south < n && !visited.has(`${[south,j]}`)){
            
            if(heights[south][j] <= heights[i][j]){
                visited.add(`${[south,j]}`);
                queue.push([south,j]);
            }
            
        }
        if(east < m && !visited.has(`${[i,east]}`)){
            
            if(heights[i][east] <= heights[i][j]){
                visited.add(`${[i,east]}`);
                queue.push([i,east]);
            }
           
        }if(west >= 0 && !visited.has(`${[i,west]}`)){
            
            if(heights[i][west] <= heights[i][j]){
                visited.add(`${[i,west]}`);
                queue.push([i,west]);
            }
           
        }
        
    }
    
    return false;
    
}
let heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]];
console.log(pacificAtlantic(heights))
//console.log(bfs(heights,0,1))
