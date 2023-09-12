const Cart = ({cart,handleRemove}) => {
  return (
    <div>
      <h3>Cart: {cart.length}</h3>
      <div className="cartContainer">
      {cart.map(bottle => (
        <div className="cart" key={bottle.id}>
  <img src={bottle.img} alt={bottle.name} key={bottle.id}/>
  <button onClick={()=>{handleRemove(bottle.id)}}>Remove</button>
  </div>
))}

      </div>
    </div>
  )
}

export default Cart
