import Square from "./Square";

let Board=({square,handlesquare})=>{
  function Rendersquare(position) {
    return <Square value={square[position]} onclick={()=>handlesquare(position)} />;
     }
  
  return <div className="board" style={{width:'fit-content'}}>
              <div className="board-row">
                 {Rendersquare(0)}
                 {Rendersquare(1)}
                 {Rendersquare(2)}
                 
              </div>
              <div className="board-row">
                {Rendersquare(3)}
                {Rendersquare(4)}
                {Rendersquare(5)}
               </div>
              <div className="board-row">
                {Rendersquare(6)}
                {Rendersquare(7)}
                {Rendersquare(8)}
              </div>
            </div>
}
export default Board;