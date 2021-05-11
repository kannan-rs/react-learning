import React from 'react'
import ComponentE_CChild from './ComponentE_CChild'

function ComponentC() {
    return (
        <div>
            Parent  {'>'} Comp C
            <ComponentE_CChild />
        </div>
    )
}

export default ComponentC
