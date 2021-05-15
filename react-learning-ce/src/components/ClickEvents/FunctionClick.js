import React from 'react'

function FunctionClick() {
    function clickHandler () {
        console.log("button click")
    }
    return (
        <div>
            <h3> Function Component</h3>
            <h4> Event Handler</h4>
            <h5> Note: See Console for O/P</h5>
            <button onClick = { clickHandler }>Function Click</button>
            <hr />
        </div>
    )
}

export default FunctionClick
