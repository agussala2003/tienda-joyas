import React from 'react'
import styled from 'styled-components'
import CardItems from './CardItems'

function Shop() {
  return (
    <ShopContainer>
            <h3>NUESTRA TIENDA</h3>
            <h1>Aquí estan los mas vendidos <br/> de nuestros productos</h1>
            <a href='#'>Ver todos</a>
            <div className='card-container'>
                <CardItems/>
            </div>
    </ShopContainer>
  )
}

export default Shop

const ShopContainer = styled.div `
    margin: 50px 0px 0px 40px;
    h3 {
        margin-bottom: 20px;
    }
    h1 {
        margin-bottom:20px;
    }
    a {
        text-decoration: none;
        background: #000;
        color: #fff;
        padding: 10px 20px;
        border-radius: 20px;
    }
    .card-container {
        display: flex;
        justify-content: flex-start;
    }
`