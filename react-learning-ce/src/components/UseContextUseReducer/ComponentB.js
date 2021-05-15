import React from 'react'
import ComponentDBChild from './ComponentDBChild'

function ComponentB() {
    return (
        <div>
            Parent {'>'} Comp B
            <ComponentDBChild />
        </div>
    )
}

export default ComponentB
