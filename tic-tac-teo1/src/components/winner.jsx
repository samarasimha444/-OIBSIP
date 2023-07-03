
let calculatewinner=(square)=>{
  let lines=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

    
  ]
for(let i=0;i<lines.length;i++){
 let[a,b,c]=lines[i];
  if( square[a] && square[a]===square[b]&& square[a]===square[c]){
      return {
        winner:square[a],
        winninglines:[a,b,c]
      
      }
     
  }
  

}
return {winner: null}

}
export default calculatewinner;
