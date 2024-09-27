export default function DerivedStat(props){
    console.log(props.boxToogle)
    const style = {
        backgroundColor:props.on ? "black":"red"
    }
    return (
        <>
        
        <div className="box_on" style={style} onClick={props.boxT}>{props.boxToogle.id}</div>
        </>
    )
}