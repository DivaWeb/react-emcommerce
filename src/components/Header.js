import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../Context"



function Header() {
      const {cartItems} = useContext(Context)
  function cart(){

      if (cartItems.length > 0){
        return <Link to="/cart"><i className="ri-shopping-cart-fill ri-fw ri-2x"></i></Link>
      }else{
        return <Link to="/cart"><i className="ri-shopping-cart-line ri-fw ri-2x"></i></Link>
      }
    }
  return (
    <header>
        <Link to="/"><h2>Pic Some</h2></Link>
        {cart()}
      </header>    
  )
}


export default Header
