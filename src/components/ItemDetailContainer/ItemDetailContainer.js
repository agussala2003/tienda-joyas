import React,{useState,useEffect} from 'react'
import {products} from "../Database/Database";
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";

function ItemDetailContainer() {
    const {id} = useParams();

  return (
    <div className="item-detail-container">
            <p style={{width:"100%", color: "white"}}>item detail container</p>
            <ItemDetail item={products[(id - 1)]}/>
    </div>
  )
}

export default ItemDetailContainer