import React from "react"
import boxs from "./boxs"
import '../style.css'
export default function Box_check(props){
    const [check, setCheck] = React.useState(props.boxValues.on)
    
  
   const style = {
    backgroundColor: props.boxValues.on ? "red":"transparent"
   

   }
    //const boxDisp = boxOn = true ? <div className="box">{boxElements} </div> : <div className="boxBlack">{boxElements} </div>
    function handleClick(){
        setCheck(prevCheck => {
            return (props.boxValues.on = !prevCheck)
            
            
        }
           
            
       
           
        )
        
    }
    const on_part = <div className="box_on" onClick={handleClick}>{props.boxValues.id}</div>
    const off_part = <div className="box_off" onClick={handleClick}>{props.boxValues.id}</div>;
    //let boxOn = box.map (boxOnValue => boxOnValue.on)
   // console.log(props.boxValues.on)
    return(
        <>
        <div className="box_on" style={style} onClick={handleClick}>{props.boxValues.id}</div>
        
        
       <br />
        </>
    )
}