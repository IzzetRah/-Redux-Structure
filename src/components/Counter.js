import React from 'react'
import Increment from './Increment'
import Decrement from './Decrement'
import { useSelector } from 'react-redux'
const Counter = () => {
    const count = useSelector(store => store.counter)
    return (
        <div className='counter'>
            <Decrement />
            <h1>{count}</h1>
            <Increment />
        </div>
    )
}

export default Counter
