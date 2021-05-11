import React, {useState} from 'react'
import MouseMoveUnmountClass from './MouseMoveUnmountClass'
import MouseMoveUnmountEffect from './MouseMoveUnmountEffect'

function UnmountParent() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            sdsdsfd
            {/* { display && <MouseMoveUnmountClass /> } */}

            { display && <MouseMoveUnmountEffect /> }
            <button onClick = { () => setDisplay( !display ) } > Toggle Display </button>
        </div>
    )
}

export default UnmountParent
