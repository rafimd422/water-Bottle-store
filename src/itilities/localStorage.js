
const cart = (cart) => {
    const saveCartToLs = JSON.stringify(cart)
    localStorage.setItem('cart', saveCartToLs)
    }

const setLocalStorage = () => {
const getItem = localStorage.getItem('cart')
if(getItem){
    return JSON.parse(getItem)
}
return [];

}


const addToLs = id => { 
    const cart = setLocalStorage()
    cart.push(id)
    cart(cart)
}