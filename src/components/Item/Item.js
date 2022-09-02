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
                <p>{item.productDescription}</p>
                <p>${item.productPrice}</p>
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
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .card-content{
            width: 100%;
            height: 50%;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            h2{
                color: #000;
                text-decoration: none;
                border: none;
            }   
            p{
                color: #000;
            }
        }
    }
`