import React,{useState} from 'react'
import styled from 'styled-components'
import Main from './Main'
import ProductDetails from './ProductDetails'

function ProductCard({productId, productName, productPrice, productImage, stock, productCategory, productDescription}) {
    const handleClick = () => {
        setExpanded(!expanded);
        console.log(expanded);
    }
    const [expanded, setExpanded] = useState(false);
  return (
    <>
    <div onClick={handleClick} className={`product-card`}>
    <ProductCardStyled>
        <div className='product-card'>
            <div className='product-image'>
                <img src={productImage} alt='product'/>
            </div>
            <div className='product-info'>
                <h1>{productName}</h1>
                <p>Solo nos quedan {stock}</p>
                <div className='product-price'>
                    <h2>${productPrice}</h2>
                </div>
            </div>
        </div>
    </ProductCardStyled>
    </div>
    </>
  )
}

export default ProductCard

const ProductCardStyled = styled.div`
    margin-right: 1rem;
    margin-bottom: 1rem;
    .product-card{
        width: 300px;
        height: 400px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0,0,0,0.3);
        overflow: hidden;
        transition: all 0.3s ease-in-out;
        &:hover{
            transform: translateY(-5px);
        }
        .product-image{
            width: 100%;
            height: 50%;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .product-info{
            width: 100%;
            height: 50%;
            padding: 1rem;
            h1{
                font-size: 1.5rem;
                font-weight: 600;
                margin-bottom: 0.5rem;
            }
            p{
                font-size: 1rem;
                font-weight: 400;
                margin-bottom: 1rem;
            }
            .product-price{
                display: flex;
                justify-content: space-between;
                align-items: center;
                h2{
                    font-size: 1.5rem;
                    font-weight: 600;
                }
            }
        }
    }
    .product-details{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        z-index: 100;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s ease-in-out;
        &.inactive{
            opacity: 0;
            pointer-events: none;
        }
    }
`