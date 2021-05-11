import React from 'react'
import useCounter from '../Hooks/useCounter'

function CounterOperation3Hooks() {
    const [count, increment, decrement, reset] = useCounter(0, 1)
    return (
        <div>
            <h2>Counter of Comp #3 - { count } - Using Hooks For Counter</h2>

            <button onClick = { increment } > Increment </button>
            <button onClick = { decrement } > Decrement </button>
            <button onClick= { reset } > Reset </button>
        </div>
    )
}

export default CounterOperation3Hooks
