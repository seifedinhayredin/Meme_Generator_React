export default function Star(props){
    let icon = props.imageValue ? "location.jfif"  : "meme.jfif";
    return (
        <div>
            <p>This is Star Icon</p>
            <img  src={`images/${icon}`} onClick = {props.toogle} />
        </div>
    )
}