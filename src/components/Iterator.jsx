export default function(props){
    console.log("Iterator component rendered")
    return (
        <div>
            {props.values}
        </div>
    );
}