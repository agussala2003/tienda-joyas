import React from 'react'
import styled from 'styled-components';
import {products} from "../Database/Database";

function ItemDetail({item}) {
  return (
    // ItemDetail
    <ItemDetailStyled>
    <div className="item-detail">
        <div className="item-detail-img">
            <img src={item.productImage} alt={item.productName}/>
        </div>
        <div className="item-detail-content">
            <h2>{item.productName}</h2>
            <p>{item.productDescription}</p>
            <p>${item.productPrice}</p>
        </div>
    </div>
    </ItemDetailStyled>
  )
}

export default ItemDetail

const ItemDetailStyled = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    .item-detail{
        width: 100%;
        height: 100%;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .item-detail-img{
            width: 100%;
            height: 50%;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 500px;
                object-fit: cover;
            }
        }
        .item-detail-content{
            width: 100%;
            height: 50%;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
    }
`