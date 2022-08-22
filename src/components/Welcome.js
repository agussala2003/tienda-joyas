import React from 'react'
import styled from 'styled-components'

function Welcome() {
    const logoWelcome = "img/logoWelcome.avif";
  return (
    <WelcomeContainer>
        <div className='text-welcome'>
            <h1>La mejor variedad <br/>de accesorios</h1>
            <a href='#'>Comprar ahora</a>
            <p>Hermosos accesorios para que uses</p>
        </div>
        <div className='image-welcome'>
            <img src={logoWelcome}></img>
        </div>
    </WelcomeContainer>
  )
}

export default Welcome

const WelcomeContainer = styled.div `
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
    .text-welcome {
        margin: 50px 0px 0px 40px;
        h1 {
            font-size: 50px;
            margin-bottom: 60px;
        }
        a {
            text-decoration: none;
            background: #000;
            color: #fff;
            padding: 10px 20px;
            border-radius: 20px;
        }
        p {
            margin-top: 60px;
            font-size: 16px;
        }
    }
    .image-welcome {
        width: 50%;
        margin: 0px 0px 0px 0px;
        img {
            width: 100%;
        }
    }
`