import React from 'react'
import DataFecthEffectReducer from './DataFecthEffectReducer'
import DataFetchingOnce from './DataFetchingOnce'

function ParentAPIUsingHooks() {
    return (
        <div>
            <DataFetchingOnce />
            <DataFecthEffectReducer />
        </div>
    )
}

export default ParentAPIUsingHooks
