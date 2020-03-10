import React from 'react'


const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello Nasution</h1>
    //     </div>
    // )


    //Cara Penulisan Tanpa Menggunakan JSX
    return React.createElement(
        'div',
         {id: 'hello', className: 'dummy'},
         React.createElement( 'h1', null, 'Hello Nasution')
    )
}

export default Hello;