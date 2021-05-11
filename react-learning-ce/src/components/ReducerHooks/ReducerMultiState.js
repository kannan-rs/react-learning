import React, {useReducer} from 'react'

const initialState = {
    firstCounter : 0,
    secondCounter: 10
}

const reducer = (currentState, action ) => {
    switch (action.type) {
        case 'increment':
            return { ...currentState, firstCounter: currentState.firstCounter + action.value }
        case 'decrement':
            return { ...currentState, firstCounter: currentState.firstCounter - action.value }
            case 'increment5':
                return { ...currentState, secondCounter: currentState.secondCounter + action.value }
            case 'decrement5':
                return { ...currentState, secondCounter: currentState.secondCounter - action.value }
        case 'reset':
            return initialState
        default:
            return false
    }
}
function ReducerMultiState() {
    // const [state, dispatch] = useReducer(reducer, initialState, init) // Syntax
    const [count, setState] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>Multi State Object</h1>
            <h2> Object Reducer - Action as Object</h2>
            <div>{ count.firstCounter }</div>
            <button onClick={ () => setState( { type: 'increment', value: 1 }) } >Increment</button>
            <button onClick={ () => setState({ type: 'decrement', value: 1}) } >Decrement</button>
            <button onClick={ () => setState({ type: 'reset' }) } >Reset</button>

            <h2> Multi State Management using REDUCER</h2>
            <div>{ count.secondCounter }</div>
            <button onClick={ () => setState( { type: 'increment5', value: 5 }) } >Increment 5</button>
            <button onClick={ () => setState({ type: 'decrement5', value: 5 }) } >Decrement 5</button>
            <button onClick={ () => setState({ type: 'reset' }) } >Reset</button>
            <br/><br/><br/><br/>
        </div>
    )
}

export default ReducerMultiState
