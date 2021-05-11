import { useState } from 'react'

function useCounter( initialState = 0 , value = 1) {
    const [count, setCount] = useState( initialState, value )

    const increment = () => {
        setCount( prevState => prevState + value )
    }

    const decrement = () => {
        setCount ( prevState => prevState - value )
    }

    const reset = () => {
        setCount ( initialState )
    }

    return [count, increment, decrement, reset]
}

export default useCounter
