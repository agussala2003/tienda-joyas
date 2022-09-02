import React,{useState} from 'react'
import styled from 'styled-components'

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
    <ContadorStyled>
        <div className="item-count">
            <div className="item-count-btn">
                <button onClick={decrementar}>-</button>
            </div>
            <div className="item-count-number">
                <p>{count}</p>
            </div>
            <div className="item-count-btn">
                <button onClick={incrementar}>+</button>
            </div>
            <div className="item-confrim-btn">
                <button onClick={()=>onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    </ContadorStyled>
  )
}

export default ItemCount

const ContadorStyled = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    .item-count{
            width: 100%;
            height: 100%;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            .item-count-btn{
                width: 50px;
                height: 50px;
                background-color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;
                button{
                    width: 100%;
                    height: 100%;
                    background-color: #fff;
                    border: none;
                    font-size: 30px;
                    font-weight: 700;
                    cursor: pointer;
                    }
                    }
                    .item-count-number{
                        width: 50px;
                        height: 50px;
                        background-color: #fff;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        p{
                            font-size: 30px;
                            font-weight: 700;
                            }
                            }
                            }
                            
                            `