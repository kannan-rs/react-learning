import React, {useState} from 'react'
import ClassInterval from './ClassInterval'
import EffectInterval from './EffectInterval'

function InteralParent() {
    const [classCompDisplay, classCompDispaySetter] = useState(true)
    const [funcCompDisplay, funcCompDispaySetter] = useState(true)
    return (
        <div>
            <h2> Class Component for Interval {">"} Mount & Unmount </h2>
            { classCompDisplay && <ClassInterval />}
            <button onClick={ () => classCompDispaySetter(!classCompDisplay) }> Toggle Class interval Comp</button>

            <h2> Function Component for Interval {">"} Hooks - Mount & Hooks - Unmount </h2>
            { funcCompDisplay && <EffectInterval /> }
            <button onClick={ () => funcCompDispaySetter(!funcCompDisplay) }> Toggle Class interval Comp</button>
            
        </div>
    )
}

export default InteralParent
