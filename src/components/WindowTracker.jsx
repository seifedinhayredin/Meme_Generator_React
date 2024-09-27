import React from "react"
export default function WindowTracker(){
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    React.useEffect( () => {
        function widthOfWindow(){
            console.log("Setting up....")
            setWindowWidth(prevWidth => window.innerWidth)
        }
        window.addEventListener("resize",widthOfWindow)
        return  function(){
            console.log("Cleaning Up...")
            window.removeEventListener("resize",widthOfWindow)
        }
            
        
    }, [])
    return (
        <>
        <h2>Window Size is: {windowWidth}</h2> 
        </>
    )
}