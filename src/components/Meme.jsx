
import React from 'react'
//import memesData from './memesData.js'
export default function Meme(){
    
    const [meme,setMeme] = React.useState(
      {  topText : "",
        bottomText :"",
        randomImage : "",
        Widths:0,
        heights:0
    }
    )
    const [memesData, setMemesData] = React.useState([]);


   
    React.useEffect(function (){
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(memeObj => setMemesData(memeObj.data.memes))
     },[])
    
     //const imageArray = image.data.memes;
     //const memeArray = JSON.stringify(memesData,null,3)
   
   //console.log(memesData[2].id)

    function Retrive_Image(){
    const randomNumber = Math.floor(Math.random() * memesData.length)
   const ImageData = memesData[randomNumber].url
   const top = memesData[randomNumber].name;
   const bottom = memesData[randomNumber].name;
   const Wide = memesData[randomNumber].width
   const high = memesData[randomNumber].height
    setMeme(prevImage => ({
        ...prevImage,
        randomImage:ImageData,
        topText:top,
        bottomText:bottom,
        Widths:Wide,
        heights:high

    })
)  }         
    
    return (
        <>
        <p>Memes Data</p>
        <pre>{JSON.stringify(memesData,null,3)}</pre>
        <h1>This is Meme component</h1>
        <button onClick={Retrive_Image}>Retrive new Image from API</button> <br />
        <p>Top text: {meme.topText}, width: {meme.Widths}, height: {meme.heights}</p>
        <img src={meme.randomImage} width={meme.Widths} height={meme.heights} />
        <p>Bottom text : {meme.bottomText}</p>

        </>
    )
}
