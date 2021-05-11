import React, {useState, useEffect} from 'react'

function EffectsForClickCount() {

    const [count, setCount] = useState(0)

    // Use Effect Called on the compenent render / update
    useEffect(() => {
        document.title = `Effect Hook Clicked ${count}`
    })

    return (
        <div>
            <h2> Effect Hook - Calls Every time the DOM render / Update Complete </h2>
            <button onClick={ () => setCount(count+1)} > Function Effect Hook - Clicked {count} times</button>        
        </div>
    )
}

export default EffectsForClickCount
