import React from 'react'
import ReducerClickCounter from './ReducerClickCounter'
import ReducerForObjects from './ReducerForObjects'
import ReducerMultiState from './ReducerMultiState'
import ReducerObjectAction from './ReducerObjectAction'
import ReducerSameStateMultiVar from './ReducerSameStateMultiVar'

function ReducerParent() {
    return (
        <div>
            <ReducerClickCounter />
            <ReducerForObjects />
            <ReducerObjectAction />
            <ReducerMultiState />
            <ReducerSameStateMultiVar />
        </div>
    )
}

export default ReducerParent
