import Main from "./components/Main"
import Header from "./components/Header"
import memesData from "./components/memesData"
import LearnState from "./components/LearnState"
import Iterator from "./components/Iterator"
import Box_check from "./components/Box_check"
import boxs from "./components/boxs"
import Meme from "./components/Meme"
import DerivedStat from "./components/DerivedStat"
import ChangeColor from "./components/ChangeColor"
import WindowTracker from "./components/WindowTracker"
import React from "react"


export default function App(){
    const [box, setBox] = React.useState(boxs)
    const [square,setSquare] = React.useState(boxs)
    const [iterator, setIterator] = React.useState(2)
    const [show, setShow] = React.useState(true)
    function numSquare(){
        setIterator(prevValue => prevValue * prevValue)

    }
    function numCube(){
        setIterator(prevValue => prevValue * prevValue * prevValue)

    }
    function toOrigin(){
        setIterator(prevValue => prevValue =  2)
    }

    
    function toggle(id){
        //console.log(id);
        setSquare(prevSquares => {
            return prevSquares.map(squares =>{
                return squares.id === id ? {
                    ...squares,
                    on:!squares.on
                }:squares
            })
            
        })
    }

    function toogleShow(){
        setShow(prevShow => !prevShow)
    }

    console.log("App component rendered")

    const [user, setUser] = React.useState("Seifedin")

    const boxElements = box.map(boxValues => <Box_check boxValues = {boxValues} />)

    const boxTotoogle = square.map(boxToogle => <DerivedStat boxT = {()=>toggle(boxToogle.id)} boxToogle = {boxToogle}  on = {boxToogle.on}/>)
    return (
        <>
        <Header user = {user}/>
        <Main user = {user} />
        <LearnState />

       <button onClick={toOrigin}>Original</button><button onClick={numSquare}>Square</button> <Iterator values = {iterator} /> <button onClick={numCube}>Cube</button>
       <Meme />
      {boxElements}

      <p>Toogle</p>
       {boxTotoogle}
        <br />

        <ChangeColor />

        <br />

        <button onClick={toogleShow}>Track window size</button>
        {show && <WindowTracker />}
        </>
    )
}