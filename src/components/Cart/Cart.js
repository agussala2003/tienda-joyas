import React from 'react'
import { UseCartContext } from '../context/CartContext'
import {Link} from 'react-router-dom'
import { getFirestore, collection , addDoc } from 'firebase/firestore'

const Cart = ({product}) =>{
    const {cart,removeItem,totalPrice} = UseCartContext();

    const order = {
        buyer: {
            name: 'Juan',
            phone: '123456789',
            email: 'juan@gmail.com'
        },
        items: cart.map(item => ({ id: item.item.productId, title: item.item.productName, price: item.item.productPrice, quantity: item.quantity })),
        total: totalPrice(),
    }
    
    const handleCheckout = () => {
        const db = getFirestore();
        const orders = collection(db, 'orders');
        addDoc(orders, order)
        .then(({id}) => {
            console.log(id)
        })
        cart.length = 0;
        alert('Compra realizada con exito');
    }

    if (cart.length === 0) {
        return (
            <>
            <div style={{
                textAlign: 'center',
                }}>
            <h1 style={{
                marginTop: '50px',
                marginBottom: '20px',
            }}>No hay productos en el carrito</h1>
            <Link style={{
                textDecoration: 'none',
                color: '#fff',
                padding: '10px',
                backgroundColor: '#000',
                borderRadius: '5px',
                fontSize: '20px'
            }} to='/'>Hacer compras</Link>
            </div>
            </>
        )
    }
  return (
    <div className='itemCart' style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    }}>
        <h1 style={{
            textAlign: 'center',
            marginTop: '20px',
        }}>Carrito de compras</h1>
        {
            cart.map((item)=>{
                return(
                    <>
                    <div style={{
                        marginTop: '40px',
                        display: 'flex',
                        justifyContent: 'space-between',
                    }} className='itemCart__container'>
                        <div className='itemCart__container-img'>
                            <img style={{
                                width: '300px',
                            }} src={item.item.productImage} alt={item.item.productName}/>
                        </div>
                        <div className='itemCart__container-content'>
                            <h2>{item.item.productName}</h2>
                            <p>${item.item.productPrice}</p>
                            <p>Cantidad: {item.quantity}</p>
                            <button style={{
                                width: '100px',
                                height: '30px',
                                backgroundColor: '#000',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }} onClick={()=>removeItem(item.item.id)}>Eliminar</button>
                        </div>
                    </div>
                    <div>
                        <h2>Total: ${totalPrice()}</h2>
                        <button style={{
                                width: '180px',
                                height: '40px',
                                backgroundColor: '#000',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }} onClick={handleCheckout}>Finalizar compra</button>
                    </div>
                    </>
                )
            })
        }
    </div>
  )
}

export default Cart
