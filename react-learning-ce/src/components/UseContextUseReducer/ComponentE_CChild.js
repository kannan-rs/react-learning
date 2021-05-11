import React from 'react'
import ComponentF_EChild from './ComponentF_EChild'

function ComponentE_CChild() {
    return (
        <div>
            Parent {'>'} Comp C {'>'} Comp E -{'>'} Comp C's Child 
            <ComponentF_EChild />
        </div>
    )
}

export default ComponentE_CChild
