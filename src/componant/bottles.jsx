import React, { useEffect, useState } from 'react'
import Bottle from './bottle'
import Cart from './Cart'

const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([]);

useEffect(()=>{
    fetch('bottles.json')
    .then(response => response.json())
    .then(data => setBottles(data))
},[])
useEffect(() => {
  const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
  setCart(storedCart);
  localStorage.setItem('cart', JSON.stringify(storedCart));
}, []);


const handleCart = bottle => {
  const insideCart = [...cart, bottle];
    setCart(insideCart)
    localStorage.setItem('cart', JSON.stringify(insideCart))
}
const handleRemove = (bottleId) => {
  const updatedCart = cart.filter((item) => item.id !== bottleId);
  setCart(updatedCart);
  localStorage.setItem('cart', JSON.stringify(updatedCart));
};

  return (
    <div>
      <h2>Bottles: {bottles.length}</h2>
      <Cart handleRemove={handleRemove} cart={cart} />
      <div className='bottleContainer'> 
      {bottles.map(bottle=><Bottle handleCart ={handleCart} key= {bottle.id} bottle = {bottle}></Bottle>)}
    </div>
    </div>
  )
}

export default Bottles;