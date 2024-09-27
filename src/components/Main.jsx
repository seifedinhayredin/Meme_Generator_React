import { useState } from "react";
import memesData from "./memesData"
export default function Main(props){
 //const [thingArray, setThings ] = useState(["Thing1", "Thing2"]);
 const [images,setImages] = useState([""])
const [memes, setMemes] = useState({
    bottomText: "",
    topText: "",
    randomImage: "images/location.jfif"
})
const [allMemeImages, setAllMemeImages] = useState(memesData)
    
    function handleClick (){
    const memeArray = memesData.data.memes;
    const RandomNumber = Math.floor(Math.random() * memeArray.length)
    const memeName = memeArray[RandomNumber].url
   return <p>Memes</p>
   
    }
    const memeArray = memesData.data.memes;
    const RandomNumber = Math.floor(Math.random() * memeArray.length)
    const memeName = memeArray[RandomNumber].url
   function handleImage(event){
    setImages(prevImage => memeName)
    setMemes(prevValue => {
        return {
            ...prevValue,
            [event.target.name]: event.target.value
        }
    })
    //console.log(memeName)
   }
    console.log(memes)
//    function getImage(){
//     const memeText = memeArray[RandomNumber].bottomText
//     setAllMemeImages (prevData => {
//         return {
//             ...prevData,
//             setMemes(memes.bottomText: memeName)
//         }
//     })
//    }

function handleChange(event){
    setMemes(prevValue => {
        return {
            ...prevValue,
            [event.target.name]: event.target.value
        }
    })
}

    return (
        <>
        <div className="form">
            <input className="form_inputs"
            placeholder="Top text"
            name="topText"
            value={memes.topText}
            onChange={handleChange}
            />
            <input className="form_inputs"
            placeholder="Bottom text"
            name="bottomText"
            value={memes.bottomText}
            onChange={handleChange}
            />
          </ div>
          <h1>Wellcome Back {props.user}</h1>
          <div>
          <button onClick={handleImage}  className="form_button">Get a new image</button>
          </div>
        
        
        <div>
        <div className="top-text"> {memes.topText}</div>
           <img src= {images} onClick={handleImage} className="mem_image" />
           <div className="bottom-text">{memes.bottomText}</div>
          </div>
        </>
        
             
        
       
    )
}
