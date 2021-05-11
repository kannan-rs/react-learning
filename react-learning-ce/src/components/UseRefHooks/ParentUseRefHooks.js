import React from 'react'
import UseRefHooks from './UseRefHooks'
import UseRefHooksForElement from './UseRefHooksForElement'

function ParentUseRefHooks() {
    return (
        <div>
            <UseRefHooks />
            <UseRefHooksForElement />
        </div>
    )
}

export default ParentUseRefHooks
