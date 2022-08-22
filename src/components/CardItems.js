import React,{useState} from 'react'
import styled from 'styled-components'
import CartWidget from './CartWidget';


function CardItems() {
    const [itemCount, setItemCount] = useState(0);
    const image1 = 'img/product1.avif';
    const price1 = 999;
    const itemCliked = () => {
        setItemCount(itemCount + 1)
    }
  return (
    <CardItemsContainer value={itemCount}>
        <div>
            <div className='image-card-items'>
                <img src={image1}></img>
            </div>
            <div className='text-card-items'>
                <p>Producto 1</p>
                <p>${price1}</p>
            </div>
            <div className='button-card-items'>
                <button inputMode='none' onClick={itemCliked}>Agregar al carrito <i class='bx bx-plus'></i></button>
            </div>
        </div>
        <CartWidget funcion={itemCliked} value={price1} stock={true} itemCount={itemCount}/>
    </CardItemsContainer>
  )
}

export default CardItems

const CardItemsContainer = styled.div `
    margin-top: 50px;
    display: flex;
    margin-right: 20px;
    .image-card-items {
        img {
            width: 300px;
        }
    }
    .text-card-items {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
        p {
            font-size: 16px;
            font-weight: 500;
        }
    }
    .button-card-items {
        button {
            cursor: pointer;
            font-size: 14px;
            background: #000;
            color: #fff;
            padding: 10px 20px;
            border-radius: 20px;
        }
    }
`