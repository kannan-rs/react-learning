import React, {useReducer} from 'react'

const initialState = 0

const reducer = (currentState, action ) => {
    switch (action) {
        case 'increment':
            return currentState + 1
        case 'decrement':
            return currentState - 1
        case 'reset':
            return initialState
        default:
            return false
    }
}
function ReducerClickCounter() {
    // const [state, dispatch] = useReducer(reducer, initialState, init) // Syntax
    const [count, setState] = useReducer(reducer, initialState)
    return (
        <div>
            <div>{ count }</div>
            <button onClick={ () => setState('increment') } >Increment</button>
            <button onClick={ () => setState('decrement') } >Decrement</button>
            <button onClick={ () => setState('reset') } >Reset</button>
        </div>
    )
}

export default ReducerClickCounter
