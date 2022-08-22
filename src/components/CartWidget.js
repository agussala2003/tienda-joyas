import React, {useState} from 'react'
import styled from 'styled-components'

function CartWidget({value,stock,itemCount}) {
    const price = 999;
    
    const [itemState, setItemState] = useState(true);
    const displayItems = () => {
      setItemState(!itemState);
      console.log(itemState);
    }
  return (
    <CardWidgetButton>
        <div className='cart-circle'>
            <a onClick={displayItems}>Productos <i class='bx bx-cart'></i> {itemCount}</a>
        </div>
        <div className={`item-list ${itemState ? 'inactive' : ''}`}>
          <ul>
            <li className='icon-cart'><i class='bx bx-cart'></i></li>
            <li className='items' id='items'><div className='item-container1'>{itemCount}x Anillo Plateado ${price * itemCount}</div><div className='item-container2'><i class='bx bx-minus'></i><i class='bx bx-plus'></i></div></li>
            <li className='subtotal'>Subtotal <div>${price * itemCount}</div></li>
          </ul>
        </div>
    </CardWidgetButton>
  )
}

export default CartWidget

const CardWidgetButton = styled.div `
  .cart-circle {
    position: fixed;
    right: 50px;
    bottom: 50px;
    transition: all 2ms ease-in;
    a {
      cursor: pointer;
      text-decoration: none;
      background: #000;
      transform: tranlate(-50%, -50%);
      color: #fff;
      padding:10px;
      border-radius: 40px;
      font-size: 16px;
    }
  }
  .item-list {
    color: #fff;
    transition: all 2ms ease-in;
    ul {
      display: flex;
      flex-direction:column;
      padding: 10px;
      background: #000;
      position: fixed;
      right: 50px;
      bottom: 90px;
      list-style: none;
      border-radius: 10px;
      transition: all 2ms ease-in;
      #items {
        display: flex;
        flex-direction:row;
        justify-content: space-between;
        width:220px;
        font-size: 14px;
        margin-bottom: 10px;
        .item-container1 {
          display:flex;
          justify-content: space-between;
          i {
            text-decoration: none;
            color: #fff;
          }
      }
      .item-container2 {
        text-align: right;
      }
    }
    .icon-cart {
        font-size: 25px;
        text-align: center;
        margin-bottom:10px;
        }
    .subtotal {
        display:flex;
        flex-direction:row;
        justify-content: space-between;
        width:220px;
        font-size: 14px;
        margin-bottom: 10px;
    }
    }
  }
  .inactive {
    display:none;
    transition: all 2ms ease-in;
  }
    `