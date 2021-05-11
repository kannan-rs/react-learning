import React from 'react'
import CounterWithHooks from './CounterWithHooks'
import StateForObject from './StateForObject'
import StateHookForArray from './StateHookForArray'
import StateHookPrevState from './StateHookPrevState'

function StateHookParent() {
    return (
        <div>
            {/* <CounterWithHooks /> */}
            {/* <StateHookPrevState /> */}
            {/* <StateForObject /> */}
            <StateHookForArray />
        </div>
    )
}

export default StateHookParent
