import React from 'react'
import { useDispatch } from 'react-redux'
const Increment = () => {
    const dispatch = useDispatch()
    const Plus = () => {
        dispatch({
            type: "INCREMENT"
        })
    }
    return (
        <div className='increment'>
            <button onClick={Plus}>+</button>
        </div>
    )
}

export default Increment
