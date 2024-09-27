import React from 'react'
import '../style.css'
export default function Header(props){
    
    return (
        <>
        <header className="header">
            <img src='images/meme.jfif' className='header_image' />
            <h2 className='meme_title'>Meme Generator</h2>
            <h4 className='project_title'>React Course-React-project-3</h4>
        </header>
        <b><p>User: {props.user}</p></b>
        </>
        
    )
}

