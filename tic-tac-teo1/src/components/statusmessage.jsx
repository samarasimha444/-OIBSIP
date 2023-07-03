let Statusmessage=({winner,next,square,winninglines})=>{

let a=square.every((value)=>value)
    return(
       a||winner?(winner ? <h1  className="a">The winner is <span style={{color:"#cf17a7"}}>{winner}</span>
                           </h1> 
       :<h1 className="b">Match Tied</h1>)
       :<h1 className="c">
        Next Move 
        <span style={{color:"red"}}>{` ${next}`}</span>
        </h1>)
}
export default Statusmessage;