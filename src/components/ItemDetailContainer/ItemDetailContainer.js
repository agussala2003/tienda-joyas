import React,{useState,useEffect} from 'react'
import {products} from "../Database/Database";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
    const [item, setItem] = useState({});

    const getItem = ()=>{
        return new Promise((resolve, reject)=>{
            resolve(products)
        })
    }

    useEffect(()=>{
        const getProducto = async()=>{
            const resultado = await getItem();
            const producto = resultado.find(item=>item.productId === 1);
            setItem(producto);
        }
        getProducto();
    },[])

    console.log('item:', item)
  return (
    <div className="item-detail-container">
            <p style={{width:"100%", color: "white"}}>item detail container</p>
            <ItemDetail item={item}/>
    </div>
  )
}

export default ItemDetailContainer