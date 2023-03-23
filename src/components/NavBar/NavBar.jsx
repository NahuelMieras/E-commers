import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
  return (
      <header>
          <h1>Badaló</h1>

          <nav>
             <ul>
                <li>Camiseras</li>
                <li>Pantalones</li>
                <li>Accesorios</li>
             </ul>
          </nav>

          <CartWidget/>

    </header>
    )
}

export default NavBar