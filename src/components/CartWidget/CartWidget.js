import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {UseCartContext} from '../context/CartContext'

function CartWidget() {
    const {totalProducts} = UseCartContext();
  return (
    <CartWidgetStyled>
      <Link style={{textDecoration: 'none', color: '#000'}} to="/cart">
        <div className="cart-widget">
            <i className='bx bx-cart'></i>
            <span>{totalProducts() || ''}</span>
        </div>
      </Link>
    </CartWidgetStyled>
  )
}

export default CartWidget

const CartWidgetStyled = styled.div`
    .cart-widget{
      span {
        background-color: #fff;
        color: #000;
        border-radius: 50%;
        padding: 5px 10px;
        font-size: 12px;
      }
    }`
