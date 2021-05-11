
import React, {useReducer} from 'react'

const initialState = {
    firstCounter : 0
}

const reducer = (currentState, action ) => {
    switch (action.type) {
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
function ReducerObjectAction() {
    // const [state, dispatch] = useReducer(reducer, initialState, init) // Syntax
    const [count, setState] = useReducer(reducer, initialState)
    return (
        <div>
            <h2> Object Reducer - Action as Object</h2>
            <div>{ count.firstCounter }</div>
            <button onClick={ () => setState( { type: 'increment' }) } >Increment</button>
            <button onClick={ () => setState({ type: 'decrement' }) } >Decrement</button>
            <button onClick={ () => setState({ type: 'reset' }) } >Reset</button>
        </div>
    )
}

export default ReducerObjectAction
