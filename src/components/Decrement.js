import React from 'react'
import { useDispatch } from 'react-redux'

const Decrement = () => {
    const dispatch = useDispatch()
    const Minus = () => {
        dispatch({
            type: "DECREMENT"
        })
    }
    return (
        <div className='decrement'>
            <button onClick={Minus}>-</button>
        </div>
    )
}

export default Decrement
