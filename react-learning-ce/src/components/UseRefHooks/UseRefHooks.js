import React, {useEffect, useRef} from 'react'

function UseRefHooks() {
    const inputRef = useRef(null)

    useEffect (() => {
        // Need to call Focus
        inputRef.current.focus()
        return () => {
            // No return as of now
        }
    }, [])

    return (
        <div>
            <input ref= {inputRef} type="text" />
        </div>
    )
}

export default UseRefHooks
