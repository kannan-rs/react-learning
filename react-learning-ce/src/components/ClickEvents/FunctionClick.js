import React from 'react'

function FunctionClick() {
    function clickHandler () {
        console.log("button click")
    }
    return (
        <div>
            <button onClick = { clickHandler }>Function Click</button>
        </div>
    )
}

export default FunctionClick
