import React from 'react'
import ComponentD_BChild from './ComponentD_BChild'

function ComponentB() {
    return (
        <div>
            Parent {'>'} Comp B
            <ComponentD_BChild />
        </div>
    )
}

export default ComponentB
