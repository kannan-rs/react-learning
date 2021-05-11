import React, {useState} from 'react'

function StateHookPrevState() {

    const initialCount = 0
    const [ count, setCount ] = useState( initialCount )

    const incrementByFive = () => {
        for( let i = 0; i < 5; i++) {
            setCount( count + 1)
        }
    }

    const incrementByFivePrevState = () => {
        for( let i = 0; i < 5; i++) {
            setCount( prevState => prevState + 1)
        }
    }

    return (
        <div>
            <div> Count - { count }</div>
            <button onClick={ () => setCount(count + 1) }> Increment by 1</button>
            <button onClick={ () => setCount(count - 1) }> Decrement by 1</button>
            <button onClick={ () => setCount(count + 5) }> Increment by 5</button>
            <br/>
            <h2> Looping to increment - Wont Work without Previous State</h2>
            <button onClick={ incrementByFive }> Increment by 5 - Wont Work Properly </button>

            <h2> Previous State to increment - Works</h2>
            <button onClick={ incrementByFivePrevState }> Increment by 5 - Prev State - Work Properly </button>
        </div>
    )
}

export default StateHookPrevState
