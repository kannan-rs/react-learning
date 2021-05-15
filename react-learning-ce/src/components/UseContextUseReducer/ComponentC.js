import React from 'react'
import ComponentECChild from './ComponentECChild'

function ComponentC() {
    return (
        <div>
            Parent  {'>'} Comp C
            <ComponentECChild />
        </div>
    )
}

export default ComponentC
