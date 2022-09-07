import React from 'react'
import styled from 'styled-components'

function Item({item}) {
  return ( 
    <ItemStyled>
        <div className="card">
            <div className="card-image">
                <img src={item.productImage} alt={item.productName}/>
            </div>
            <div className="card-content">
                <h2>{item.productName}</h2>
                <p>${item.productPrice}</p>
                <a>Ver mas</a>
            </div>
        </div>
    </ItemStyled>
  )
}

export default Item

const ItemStyled = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    .card{
        width: 300px;
        height: 400px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border: 1px solid #000;
        margin: 10px;
        .card-image{
            width: 100%;
            height: 50%;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                height: 100%;
            }
        }
        .card-content{
            width: 80%;
            height: 50%;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: stretch;
            flex-direction: column;
            h2{
                text-align: center;
                color: #000;
                text-decoration: none;
                border: none;
                font-size: 1.1rem;
            }   
            p{
                text-align: center;
                color: #000;
                text-decoration: none;
                border: none;
                font-size: 1rem;
            }
            a {
                text-align: center;
                text-decoration: none;
                border: none;
                background: #000;
                color: #fff;
                padding: 10px;
                border-radius: 5px;
                transition: all 0.3s ease-in-out;
                &:hover{
                    background: #303030;
                }
            }
        }
    }
`