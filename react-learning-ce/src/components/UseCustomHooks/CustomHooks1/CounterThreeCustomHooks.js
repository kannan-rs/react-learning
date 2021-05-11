import React, {useState} from 'react'
import useDocTitle from '../Hooks/useDocTitle'

function CounterThreeCustomHooks() {
    const [count, setCount] = useState(0)

    
    useDocTitle(count)

    return (
        <div>
            <button onClick = {() => setCount( count + 1)} > Component #3 - Counter - {count} </button>
        </div>
    )
}

export default CounterThreeCustomHooks
