import React from 'react'

// function Greet() {
//     return <h1>Hello Nasution</h1>
// }

const Greet = (props) => {
    return(
        <div>
             <h2>Hello {props.name} Asal Kami {props.asal}</h2>
             {props.children}
        </div>
       
    )
}


export default Greet;