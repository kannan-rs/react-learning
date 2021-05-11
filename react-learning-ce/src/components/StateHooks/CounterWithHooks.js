import React, {useState} from 'react'

function CounterWithHooks() {
    // useState > State Hook for react functional component
    // Returns 2 Values
    //  1 > State Value that is assigned to 1st variable
    //  2 > Function to Set State of the state variable (Setter Function)
    const [count, setCount] = useState(0)
    
    return (
        <div>
            <button onClick={ () => setCount(count + 1)}> Clicked {count} times </button>        
        </div>
    )
}

// Caution: 
// 1. Call Hooks at the top level and not at the loops or conditions or Nested funtions
// 2. Call only insider React Functions and not on Regular functions

export default CounterWithHooks
