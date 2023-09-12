const Cart = ({cart}) => {
  return (
    <div>
      <h3>Cart: {cart.length}</h3>
      <div className="cartContainer">
      {cart.map(bottle => (
  <img src={bottle.img} alt={bottle.name} key={bottle.id} />
))}

      </div>
    </div>
  )
}

export default Cart
