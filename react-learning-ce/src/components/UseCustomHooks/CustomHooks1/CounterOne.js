import React, {useState, useEffect} from 'react'

function CounterOne() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        // Mount
        document.title = `count - ${ count }`
        return () => {
            // No Unmount
        }
    }, [count])
    return (
        <div>
            <button onClick = {() => setCount( count + 1)} > Component #1 - Counter - {count} </button>
        </div>
    )
}

export default CounterOne
