import React from 'react'
import styled from 'styled-components'

function CartWidget() {
  return (
    <CartWidgetStyled>
        <div className="cart-widget">
            <i className='bx bx-cart'></i>
        </div>
    </CartWidgetStyled>
  )
}

export default CartWidget

const CartWidgetStyled = styled.div``
