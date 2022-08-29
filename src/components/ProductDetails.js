import React,{useState} from 'react'
import styled from 'styled-components'

function ProductDetails({productId, productName, productPrice, productImage, stock, productCategory, productDescription}) {
    const [expanded, setExpanded] = useState(false);
    const handleClick = () => {
        setExpanded(!expanded);
        console.log(expanded);
    }
  return (
    <>
        <ProductDetailsStyled>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <div className='product-image'>
                            <img src={productImage} alt='product'/>
                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className='product-info'>
                            <h1>{productName}</h1>
                            <p>{productDescription}</p>
                            <div className='product-price'>
                                <h2>${productPrice}</h2>
                            </div>
                            <div className='product-quantity'>
                                <h3>${productPrice}</h3>
                                <div className='quantity'>
                                    <button className='btn btn-danger'>-</button>
                                    <input type='text' value='1'/>
                                    <button className='btn btn-success'>+</button>
                                </div>
                            </div>
                            <div className='product-add'>
                                <button className='btn btn-primary'>Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ProductDetailsStyled>
    </>
  )
}

export default ProductDetails

const ProductDetailsStyled = styled.div`
    margin-top: 2rem;
    .product-image{
        width: 100%;
        height: 400px;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .product-info{
        width: 100%;
        height: 400px;
        padding: 1rem;
        h1{
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
        }
        p{
            font-size: 1rem;
            margin-bottom: 1rem;
        }
        .product-price{
            h2{
                font-size: 1.5rem;
                font-weight: 600;
            }
        }
        .product-quantity{
            margin-top: 1rem;
            h3{
                font-size: 1rem;
                font-weight: 600;
                margin-bottom: 0.5rem;
            }
            .quantity{
                display: flex;
                align-items: center;
                input{
                    width: 50px;
                    height: 30px;
                    text-align: center;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    margin: 0 0.5rem;
                }
            }
        }
        .product-add{
            margin-top: 1rem;
            button{
                width: 100%;
                height: 40px;
                border: none;
                border-radius: 5px;
                font-size: 1rem;
                font-weight: 600;
                cursor: pointer;
            }
        }
    }
`