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
function ReducerSameStateMultiVar() {
    // const [state, dispatch] = useReducer(reducer, initialState, init) // Syntax
    const [count, setState] = useReducer(reducer, initialState)
    const [count2, setState2] = useReducer(reducer, initialState)
    return (
        <div>
            <h1> Multiple State with Same Reducer and Same Functionality</h1>
            <h2>State #1 - Counter</h2>
            <div>{ count }</div>
            <button onClick={ () => setState('increment') } >Increment</button>
            <button onClick={ () => setState('decrement') } >Decrement</button>
            <button onClick={ () => setState('reset') } >Reset</button>


            <h2>State #2 - Counter</h2>
            <div>{ count2 }</div>
            <button onClick={ () => setState2('increment') } >Increment</button>
            <button onClick={ () => setState2('decrement') } >Decrement</button>
            <button onClick={ () => setState2('reset') } >Reset</button>
        </div>
    )
}

export default ReducerSameStateMultiVar
