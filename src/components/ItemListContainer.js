import React from 'react'
import styled from 'styled-components'

const counter = 0;

function ItemListContainer() {
  return (
    <ItemListContainerStyled>
        <div className='container'>
            {
              counter == 0 ? (
                <div className='empty-cart'>
                  <h1>Carrito vacío</h1>
                </div>
              ) : (
                  <h1>Hola</h1>
              )
              }
        </div>
    </ItemListContainerStyled>
  )
}

export default ItemListContainer

const ItemListContainerStyled = styled.div`
    .container{
        .empty-cart{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
    }
`