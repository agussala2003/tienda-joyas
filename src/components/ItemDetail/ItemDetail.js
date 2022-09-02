import React,{useState} from 'react'
import styled from 'styled-components';
import ItemCount from '../ItemCount/ItemCount.js';

function ItemDetail({item}) {
    const [count,setCount] = useState(0)
    const [show,setShow] = useState(true)
    const onAdd = (cantidad)=>{
        setCount(cantidad)
        console.log('se agregaron',cantidad,'productos')
        item.stock = item.stock - cantidad;
        setShow(!show)
    }
    console.log(count)
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
        <div className={`item-detail-count ${show ? '' : 'inactive'}`}>
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
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
        .inactive{
            display: none;
        }
    }
`