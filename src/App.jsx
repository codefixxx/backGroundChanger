import {useState} from 'react'


function App() {
    const [color,setColor]=useState("lightgray")
    let body = document.querySelector("body")
    body.style.backgroundColor = color
    function handleClick(event) {
        body.style.backgroundColor=event.target.id
    }

    return (<>
        
        <div className="button-container">
            <button id="Red" style={ {backgroundColor:"red", color:"white"} } onClick={handleClick}>Red</button>
            <button id="Green" style={ {backgroundColor:"green", color:"white"} } onClick={handleClick}>Green</button>
            <button id="Blue" style={ {backgroundColor:"blue", color:"white"} } onClick={handleClick}>Blue</button>
            <button id="Olive" style={ {backgroundColor:"olive", color:"white"} } onClick={handleClick}>Olive</button>
            <button id="Gray" style={ {backgroundColor:"gray", color:"white"} } onClick={handleClick}>Gray</button>
            <button id="Yellow" style={ {backgroundColor:"yellow", color:"black"} } onClick={handleClick}>Yellow</button>
            <button id="Pink" style={ {backgroundColor:"pink", color:"black"} } onClick={handleClick}>Pink</button>
            <button id="Purple" style={ {backgroundColor:"purple", color:"white"} } onClick={handleClick}>Purple</button>
            <button id="Lavender" style={ {backgroundColor:"lavendar", color:"black"} } onClick={handleClick}>Lavender</button>
            <button id="White" style={ {backgroundColor:"white", color:"black"} } onClick={handleClick}>White</button>
            <button id="Black" style={ {backgroundColor:"black",color:"white"} } onClick={handleClick}>Black</button>
        </div>
        
        
    </>)
}
export default App