let Square=(props)=>{
    return <button type="button" className="square" onClick={props.onclick}>{props.value}</button>
}
export default Square;
