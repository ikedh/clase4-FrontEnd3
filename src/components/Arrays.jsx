import React from 'react'

const Arrays = () => {

const frutas= [
    "Frutilla",
    "Manzana",
    "Banana",
    "Pera",
    "Naranja"
]


  return (

    <div className='content'>
        <h3>Iterando un Array</h3>
        <div>
            <ul>
                {frutas}
            </ul>
        </div>
    </div>
    
  )
}

export default Arrays