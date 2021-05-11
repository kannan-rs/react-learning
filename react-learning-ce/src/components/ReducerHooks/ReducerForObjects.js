import React, {useReducer} from 'react'

const initialState = {
    firstCounter : 0
}

const reducer = (currentState, action ) => {
    switch (action) {
        case 'increment':
            return { firstCounter: currentState.firstCounter + 1 }
        case 'decrement':
            return { firstCounter: currentState.firstCounter - 1 }
        case 'reset':
            return initialState
        default:
            return false
    }
}
function ReducerForObjects() {
    // const [state, dispatch] = useReducer(reducer, initialState, init) // Syntax
    const [count, setState] = useReducer(reducer, initialState)
    return (
        <div>
            <h2> Object Reducer</h2>
            <div>{ count.firstCounter }</div>
            <button onClick={ () => setState('increment') } >Increment</button>
            <button onClick={ () => setState('decrement') } >Decrement</button>
            <button onClick={ () => setState('reset') } >Reset</button>
        </div>
    )
}

export default ReducerForObjects
