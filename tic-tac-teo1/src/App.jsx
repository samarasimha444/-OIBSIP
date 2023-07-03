import { useState } from "react";
import Board from "./components/board";

import "./style.scss"
import Message from "./components/statusmessage";
import calculatewinner from "./components/winner";

export default function App(){
let[squares,setsquares]=useState(Array(9).fill(null));
let[next,setnext]=useState(false);
let winner=calculatewinner(squares).winner;
let winninglines=calculatewinner(squares).winninglines;


let handlesquare=(clickedposition)=>{


   if(squares[clickedposition] || winner){
    return null
   }
    else{setsquares(squares.map((value,index)=>{if(clickedposition===index){return next?  "X":"0"} return value}))}
    setnext(!next)
    
}
let restart=()=>{
  setsquares(squares.map((value)=>null))
}
  return (
    <div className="App">
      
       
      <Message next={next? "X":"0"} winner={winner} square={squares} winninglines={winninglines}/>
     
      <Board square={squares} handlesquare={handlesquare}/>
      <button onClick={restart} className="restart">RESTART</button>
      
    </div>
  )
}
