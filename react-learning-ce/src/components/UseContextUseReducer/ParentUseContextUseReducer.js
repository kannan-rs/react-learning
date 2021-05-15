import React, { useReducer } from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'

// Initilize the State Value
const initialState = 0

// Reducer to Manage the state
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

// Context to share the State to its Children
export const CountContext = React.createContext()


function ParentUseContextUseReducer() {
    // Descructure the State to use in the children or to provide in the provider
    const [count, setState] = useReducer(reducer, initialState)
    return (
        // Contect Provider to carry the state and its dispatcher
        <CountContext.Provider value={ {countState: count, countDispatch: setState} }>
            <div>
                <h1> { count } </h1>
                <h1> Comp #A</h1>
                <ComponentA />

                <h1> Comp #B</h1>
                <ComponentB />

                <h1> Comp #C</h1>
                <ComponentC />
            </div>
        </CountContext.Provider>
    )
}

export default ParentUseContextUseReducer
