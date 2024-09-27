import React from "react"
import Count from "./Count";
import Star from "./Star";
export default function LearnState(){
    let [isImportant, setIsImportant] = React.useState([""]);
    let [isAddSub, setIsAddSub] = React.useState(0);
    const [isGoingOut, setIsGoingOut] = React.useState(false);

    const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"]);

    const [contact, setContact] = React.useState({
        name: "Seifedin Hayredin",
        email: "seifedinhayredin@gmail.com",
        phone: "0964088015",
        address: "Addis abeba",
        isFavourite: false
        
    });

    console.log(contact)

    console.log(isImportant[0])

    function handleClickNo(){
        
        setIsImportant(["No"])
    }
    function handleClickYes(){
        
        setIsImportant(["Yes"])
    }

    function handleAdd(){
        //setIsAddSub(isAddSub + 1)
        setIsAddSub(prevValue => prevValue + 1) //Another and recommended method for the above commented code
    }
    function handleSub(){
        //setIsAddSub(isAddSub - 1)
        setIsAddSub(prevValue => prevValue - 1) //Another and recommended method for the above commented code
    }
    
   
    //let answer =  isGoingOut ? "Yes":  "No"; 
function Going(){
    setIsGoingOut(prevGoing => !prevGoing)
}
function addItems(){
    setThingsArray(prevArrayItem => [...prevArrayItem, `Thing ${prevArrayItem.length + 1}`])
}

const thingsElements = thingsArray.map(thing => <p className="add_item">{thing}</p>)

//const contactElements = contact.map(values => <p>{values}</p>)
// let icon;
// icon = contact.isFavourite ? "location.jfif"  : "meme.jfif"

function toogleImage(){
    setContact (prevContact => {
        return {
            ...prevContact,
           
            isFavourite: !prevContact.isFavourite
        }
    })
}
    return <>
        <p>Is learning about state is needed?   <button onClick={handleClickYes}>Yes</button> <button onClick={handleClickNo}>No</button></p>
        
        <h1>{isImportant}</h1>
        
        <button onClick={handleSub}>-</button> <button><Count number = {isAddSub}/></button> <button onClick={handleAdd}>+</button>
        <h2>Do you need to going out to night?</h2>
        <button onClick={Going}>{isGoingOut ? "Yes":  "No"}</button><br />
        <button onClick={addItems}>Add Items</button>
        {thingsElements}
       
        <footer className="my_contact">
            <p>{contact.name}</p>
            <p>{contact.email}</p>
            <p>{contact.address}</p>
             
             
            <Star imageValue = {contact.isFavourite} toogle = {toogleImage}/>
        </footer>
    </>
}