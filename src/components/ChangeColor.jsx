import React from 'react'

export default function ChangeColor(){
    const [activeColor, setActiveColor] = React.useState("null")
    const [textColor, setTextColor] = React.useState("null")

    /*function handleChange(event){
        //setActiveColor(prevColr => event.target.value)
        setActiveColor (prevColor => {
            return{
                [event.target.name]: event.target.value
            }
        })
    }*/
        function handleBackgroundColor(event){
            setActiveColor(prevBackColor => event.target.value)
        }

        function handleTextColor(event){
            setTextColor(prevTextColor => event.target.value)
        }
    return (
        <>
        <h1>Changing background colour using Input text</h1>
         <div className='color_change' style={{backgroundColor: activeColor}}>
            
            <p style={{color: textColor}}>Area for color change</p>
            

        </div>
        <form className='form_color_change'>
            Background_Colour: <input
            type='text'
            name='color_change'
            value={activeColor.color_change}
            placeholder='Enter the color to change background of above box'
            onChange={handleBackgroundColor}
            /> 
           Text_Colour: <input
            type='text'
            name='text_color'
            value={textColor.text_color}
            placeholder='Enter the color to change colour of text'
            onChange={handleTextColor}
            />
        </form>
        </>
       
    )
}