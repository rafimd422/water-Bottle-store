import React from 'react'


const Bottle = ({bottle, handleCart}) => {

    const {name, img, price} = bottle


  return (
        <div className="bottle">
      <h4>Bottle: {name}</h4>
      <img src={img} />
      <p>Price: ${price}</p>
      <button onClick={()=>{handleCart(bottle)}}>Purchase</button>
    </div>
  )
}

export default Bottle;
