import React from 'react'
import ComponentFEChild from './ComponentFEChild'

function ComponentECChild() {
    return (
        <div>
            Parent {'>'} Comp C {'>'} Comp E -{'>'} Comp C's Child 
            <ComponentFEChild />
        </div>
    )
}

export default ComponentECChild
