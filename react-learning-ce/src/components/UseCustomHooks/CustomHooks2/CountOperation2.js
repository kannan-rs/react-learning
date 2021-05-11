import React, { useState } from 'react'

function CounterOperation2() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount( count + 1 )
    }

    const decrement = () => {
        setCount ( count - 1 )
    }

    const reset = () => {
        setCount ( 0)
    }
    return (
        <div>
            <h2>Counter of Comp #2 - { count } - Normal Component Counter</h2>

            <button onClick = { increment } > Increment </button>
            <button onClick = { decrement } > Decrement </button>
            <button onClick= { reset } > Reset </button>
        </div>
    )
}

export default CounterOperation2
