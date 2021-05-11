import React, { useContext} from 'react'

// Import Context from the declared parent
import { CountContext } from './ParentUseContextUseReducer'


function ComponentA() {
    // Getting the context using "useContext" HOOKS
    const countContext = useContext(CountContext)
    return (
        <div>
            Parent {'>'} Comp A
            {/* Access the state */}
            <h2> Counter in Comp #A {countContext.countState} </h2>

            {/* Access the Dispatcher */}
            <button onClick={ () => countContext.countDispatch('increment') } >Increment</button>
            <button onClick={ () => countContext.countDispatch('decrement') } >Decrement</button>
            <button onClick={ () => countContext.countDispatch('reset') } >Reset</button>
        </div>
    )
}

export default ComponentA
