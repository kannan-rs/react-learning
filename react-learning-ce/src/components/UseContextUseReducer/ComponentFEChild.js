import React, { useContext} from 'react'
import { CountContext } from './ParentUseContextUseReducer'


function ComponentFDChild() {
    const countContext = useContext(CountContext)
    return (
        <div>
             Parent {'>'} Comp C {'>'} Comp E {'>'} Comp F -{'>'} Component D's Child
            <h2> Counter in Comp #D {countContext.countState} </h2>

            <button onClick={ () => countContext.countDispatch('increment') } >Increment</button>
            <button onClick={ () => countContext.countDispatch('decrement') } >Decrement</button>
            <button onClick={ () => countContext.countDispatch('reset') } >Reset</button>
        </div>
    )
}

export default ComponentFDChild

