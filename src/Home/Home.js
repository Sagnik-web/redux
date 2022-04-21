import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Home({value}) {
    const  dispatch = useDispatch()
    const {c} = useSelector(state => state.custom)

    const addBtn = ()=>{
        dispatch({
            type:"increment",
            // payload:25
        })
    }

    const subBtn = ()=>{
        dispatch({
            type:"dicrement"
        })
    }
  return (
    <div>
        <p>{c}</p>
        <button onClick={addBtn}>Increment</button>
        <button>Decrement</button>
    </div>
  )
}

export default Home