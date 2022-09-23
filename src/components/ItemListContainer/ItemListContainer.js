import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import ItemList from '../ItemList/ItemList.js'
import {useParams} from 'react-router-dom'
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';

function ItemListContainer() {

    const {tipoProducto} = useParams();
    console.log(tipoProducto)
    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        const querydb = getFirestore();
        const queryCollection = collection(querydb, "items");
        if(tipoProducto){
            const queryFilter = query(queryCollection, where("productCategory", "==", tipoProducto));
            getDocs(queryFilter)
            .then(res => {
                setProductos(res.docs.map(doc => ({theId: doc.id,...doc.data()})))
            })
        }else{
            getDocs(queryCollection)
            .then(res => {
                setProductos(res.docs.map(doc => ({theId: doc.id,...doc.data()})))
            }
            )
            .catch(err => console.log(err))
        }
    },[tipoProducto])

  return (
    <ItemListContainerStyled>
        <h1>Productos</h1>
        <div className="item-list-container">
            <ItemList items={productos}/>
        </div>
    </ItemListContainerStyled>
  )
}

export default ItemListContainer

const ItemListContainerStyled = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    h1{
        color: #000;
    }
    .item-list-container{
        width: 100%;
        height: 100%;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
`