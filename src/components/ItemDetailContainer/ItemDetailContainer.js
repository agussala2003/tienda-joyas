import React,{useState,useEffect} from 'react'
import ItemDetail from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";
import {getFirestore, doc, getDoc} from 'firebase/firestore';

function ItemDetailContainer() {
    const {id} = useParams();
    const [data, setData] = useState([]);

    useEffect(()=>{
      const querydb = getFirestore();
      const queryDoc = doc(querydb, "items", id);
      getDoc(queryDoc)
      .then(res => setData({theId: res.id,...res.data()}))
      .catch(err => console.log(err))
    },[])

  return (
    <div style={{marginBottom : '50px'}} className="item-detail-container">
            <p style={{width:"100%", color: "white"}}>item detail container</p>
            <ItemDetail item={data}/>
    </div>
  )
}

export default ItemDetailContainer