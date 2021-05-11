import React, {useState, useEffect} from 'react'

function ConditionalEffects() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

    // Use Effect Called on the compenent render / update
    // 2nd Prram [] ARRAY, takes state/props value to watch and call EFFECT only of those changed
    useEffect(() => {
        console.log("Use Effect - render on every update??")
        document.title = `Effect Hook Clicked ${count}`
    }, [count])

    return (
        <div>
            <h2> Effect Hook - Calls Every time the DOM render / Update Complete </h2>
            <button onClick={ () => setCount(count+1)} > Function Effect Hook - Clicked {count} times</button> 

            <input type="text" value={ name } onChange={ (e) => setName( e.target.value ) } />       
        </div>
    )
}

export default ConditionalEffects
