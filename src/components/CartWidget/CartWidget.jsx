import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = 'https://cdn-icons-png.flaticon.com/512/107/107831.png'
  return (
    <div className='carrito'>
        <img className='imgCarrito' src={imgCarrito} alt="carrito de compra" />
        <strong>1</strong>
    </div>
  )
}

export default CartWidget