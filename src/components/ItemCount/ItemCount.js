import React,{useState} from 'react'

function ItemCount({stock,initial,onAdd}) {
    const [count,setCount] = useState(initial)

    const decrementar = ()=>{
        if(count>1){
            setCount(count-1)
        }
    }

    const incrementar = ()=>{
        if(count<stock){
            setCount(count+1)
        }
    }
  return (
    <div className='estilosContador'>
            <p>Stock disponible: {stock}</p>
            <div className='contenedorControles'>
                <button disabled={stock===0} onClick={decrementar} className='botonControl'>-</button>
                <p>{count}</p>
                <button disabled={stock===0} onClick={incrementar} className='botonControl'>+</button>
            </div>
            <button disabled={stock === 0} className='botonAgregar'>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount