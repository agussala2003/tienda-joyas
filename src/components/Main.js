import React from 'react'
import styled from 'styled-components'
import ProductCard from './ProductCard';
import ProductDetails from './ProductDetails';

const products = [
    { productId: 1, stock:3, productCategory: 'Oro', productName: 'Anillo de oro', productPrice: 950, productImage: 'https://images.unsplash.com/photo-1636291724685-0a336329726c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80', productDescription: 'Anillo de oro de 18k con diamantes'},
    { productId: 2, stock:5, productCategory: 'Oro', productName: 'Pulsera de oro', productPrice: 850, productImage: 'https://images.unsplash.com/photo-1610223515982-5bae48b7c2c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80', productDescription: 'Pulsera de oro de 18k con diamantes'},
    { productId: 3, stock:2, productCategory: 'Oro', productName: 'Collar de oro', productPrice: 750, productImage: 'https://images.unsplash.com/photo-1637056731053-4971a1ded2e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80', productDescription: 'Collar de oro de 18k con diamantes'},
    { productId: 4, stock:4, productCategory: 'Plata', productName: 'Anillo de plata', productPrice: 350, productImage: 'https://images.unsplash.com/photo-1607869083402-e2809fe9a65e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80', productDescription: 'Anillo de plata de 18k con diamantes'},
    { productId: 5, stock:6, productCategory: 'Plata', productName: 'Pulsera de plata', productPrice: 250, productImage: 'https://images.unsplash.com/photo-1639065643006-e217c4fee12e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80', productDescription: 'Pulsera de plata de 18k con diamantes'},
    { productId: 6, stock:8, productCategory: 'Plata', productName: 'Collar de plata', productPrice: 150, productImage: 'https://images.unsplash.com/photo-1654963974854-52189ba38246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=596&q=80', productDescription: 'Collar de plata de 18k con diamantes'},
    { productId: 7, stock:10, productCategory: 'Plata', productName: 'Aretes de plata', productPrice: 50, productImage: 'https://images.unsplash.com/photo-1518991669955-9c7e78ec80ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80', productDescription: 'Aretes de plata de 18k con diamantes'},
    { productId: 8, stock:12, productCategory: 'Plata', productName: 'Pendientes de plata', productPrice: 100, productImage: 'https://images.unsplash.com/photo-1637056731053-4971a1ded2e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80', productDescription: 'Pendientes de plata de 18k con diamantes'},
    { productId: 9, stock:14, productCategory: 'Plata', productName: 'Anillo de plata', productPrice: 350, productImage: 'https://images.unsplash.com/photo-1637056731053-4971a1ded2e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80', productDescription: 'Anillo de plata de 18k con diamantes'},
    { productId: 10, stock:16, productCategory: 'Plata', productName: 'Pulsera de plata', productPrice: 250, productImage: 'https://images.unsplash.com/photo-1637056731053-4971a1ded2e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80', productDescription: 'Pulsera de plata de 18k con diamantes'},
];

function Main() {
  return (
    <MainStyled>
        <div className="main-info">
            <h1>Aquí podras encontrar todos nuestros productos</h1>
        </div>
        <div className="main-products">
            {products.map((product) => (
                <ProductCard productId={product.productId} productName={product.productName} productCategory={product.productCategory} productDescription={product.productDescription} productImage={product.productImage} productPrice={product.productPrice} stock={product.stock}/>
            ))}
        </div>
        <div className="product-details">
            {products.map((product) => (<ProductDetails productId={product.productId} productName={product.productName} productCategory={product.productCategory} productDescription={product.productDescription} productImage={product.productImage} productPrice={product.productPrice} stock={product.stock}/>
            ))}
        </div>
    </MainStyled>
  )
}

export default Main

const MainStyled = styled.div`
    margin: 0 10%;
    .main-info {
        h1 {
            text-align: center;
            font-size: 2rem;
            margin: 2rem 0;
        }
    }
    .main-products {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        cursor: pointer;
    }
`